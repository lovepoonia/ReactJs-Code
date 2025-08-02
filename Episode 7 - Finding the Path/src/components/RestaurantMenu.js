import { useEffect, useState} from "react";
import ShimmerUi from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/contants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo]= useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo === null){
        return <ShimmerUi/>;
    }

    const {name ,costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    // itemCards name should be same for api
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{avgRating}</h2>
            <h1>Menu</h1>
            <ul className="menuCard">
                {itemCards.map((item)=>(
                    
                    <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice
                    }</li>
                ))}
                
            </ul>
        </div>
    )
}

export default  RestaurantMenu;