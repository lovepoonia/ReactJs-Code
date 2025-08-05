
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";
import ShimmerUi from "./Shimmer";
import useBody from "../utils/useBody";
import { Link } from "react-router-dom";

const Body = ()=> {
    const {searchText, setSearchText, resListR, filterR, setFilterR} = useBody();
    
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
                    setFilterR(filterList);
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