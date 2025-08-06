import React,{ useEffect, useState} from 'react'

const useBody = () => {
    const [resListR , setResList]=useState([]);
    const [filterR, setFilterR]=useState([]);
    const [searchText, setSearchText] = useState("");

     useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        // console.log(json);

        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterR(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    return{resListR, filterR, setFilterR, searchText, setSearchText}; 
  
}

export default useBody
