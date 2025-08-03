
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";
import ShimmerUi from "./Shimmer";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const Body = ()=> {
    
    
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
     
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <div> No internet connection </div>;
    }

    if(resListR.length===0){
        return  <ShimmerUi/>
    }

    return(


        <div className="body">

            <div className="felter flex al">
            <div className="search m-4 p-4 ">
                <input type="text" className="search-name border border-solid border-black rounded" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                    let filterSearchData =resListR.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterR(filterSearchData);
                }} className="border-2 border-solid border-green-300 rounded bg-green-200" >🔍</button>
            </div>
            <div className="m-2 p-4 flex items-center ">    
            <button className="px-4 py-2 bg-gray-200 rounded"
                 onClick={() => {
                    const filterList= resListR.filter((res)=>res.info.avgRating > 4.5);
                    setResList(filterList);
                 }}>Top Rated Restaurants</button>
            </div>
            </div>
            <div className="flex flex-wrap">
               {
                filterR.map((restaurant)=>
               ( <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><Card    resData={restaurant}/></Link>))
               }
            </div>
        </div>
    )
}

export default Body;