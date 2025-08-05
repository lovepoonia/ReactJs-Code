import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";
import ShimmerUi from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=> {
const {
resListR,
setResList,
filterR,
setFilterR,
searchText,
setSearchText,
} = useBody();
    
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
                    setFilterR(filterList);
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