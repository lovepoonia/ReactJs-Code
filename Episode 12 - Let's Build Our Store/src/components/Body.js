import useOnlineStatus from "../utils/useOnlineStatus";
import Card, {vegCard} from "./Card";
import ShimmerUi from "./Shimmer";
import {useContext } from "react"; 
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useBody from "../utils/useBody";
const Body = ()=> {
    const {resListR, filterR, setFilterR, searchText, setSearchText} = useBody();
    
    const PrometedCard = vegCard(Card);

    const {loggedInUser, setUserName} = useContext(UserContext)

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
            <div className="m-2 p-4">
            <input className="border-black border-2  " 
           value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
            </div>
            </div>
            <div className="flex flex-wrap">
               {
                filterR.map((restaurant)=>
               ( <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>{
                restaurant.info.veg?<PrometedCard resData={restaurant}/>:<Card resData={restaurant}/>
               }</Link>))
               }
            </div>
        </div>
    )
}

export default Body;