import ShimmerUi from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

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