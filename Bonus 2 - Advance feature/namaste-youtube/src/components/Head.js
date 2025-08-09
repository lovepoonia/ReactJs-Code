import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchResults = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchResults[searchText]){
        setSuggestions(searchResults[searchText]);
      }else {
        searchSuggestions()
      }
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [searchText]);

  const searchSuggestions = async () => {
    if (!searchText.trim()) {
      setSuggestions([]);
      return;
    }
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-2 items-center shadow-lg bg-white sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex col-span-1 items-center gap-4 px-2">
        <img
          onClick={toggleHandler}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="sidebar"
          className="h-8 cursor-pointer"
        />
        <img
          src="../image/download.jpeg"
          alt="Logo"
          className="h-8 cursor-pointer"
        />
      </div>

      {/* Search Bar */}
      <div className="col-span-10 flex justify-center relative">
        <div className="flex w-[40rem]">
          <input
            type="text"
            className="flex-grow border border-gray-400 rounded-l-full py-2 px-6 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          />
          <button className="border border-gray-400 rounded-r-full px-5 bg-gray-100 hover:bg-gray-200">
            🔍
          </button>
        </div>

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 w-[40rem] bg-white border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto z-50">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => {
                    setSearchText(s);
                    setShowSuggestions(false);
                  }}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex col-span-1 justify-end items-center gap-4 px-2">
        <button className="h-8">🔔</button>
        <button className="h-8">🎦</button>
        <img
          src="../image/user.png"
          alt="User_Img"
          className="h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Head;
