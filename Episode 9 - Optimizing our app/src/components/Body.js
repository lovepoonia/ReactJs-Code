import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";
import ShimmerUi from "./Shimmer";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const Body = ()=> {
    let filterR, resListR = useBody();
    
    // const [resListR , setResList]=useState([]);
    // const [filterR, setFilterR]=useState([]);
   
    
    // const setResList  = useBody();
    // const setFilterR = useBody();

    const [searchText, setSearchText] = useState("");

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData = async () =>{
    //     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json =await data.json();
    //     console.log(json);

    //     setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //     setFilterR(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // }
     
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <div> No internet connection </div>;
    }

    if(resListR.length===0){
        return  <ShimmerUi/>
    }

    return(


        <div className="body">

            <div className="felter">
            <div className="search">
                <input type="text" className="search-name" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                    let filterSearchData =resListR.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterR(filterSearchData);
                }}>search</button>
            </div>

                <button className="filter-btn"
                 onClick={() => {
                    const filterList= resListR.filter((res)=>res.info.avgRating > 4.5);
                    setResList(filterList);
                 }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                filterR.map((restaurant)=>
               ( <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><Card    resData={restaurant}/></Link>))
               }
            </div>
        </div>
    )
}

export default Body;