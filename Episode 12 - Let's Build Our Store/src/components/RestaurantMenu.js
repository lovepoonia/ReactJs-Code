import ShimmerUi from "./Shimmer";
import { useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [indexItem, setIndexItem] = useState(null);

    if(resInfo === null){
        return <ShimmerUi/>;
    }

    const {name , avgRating, cuisines
    } = resInfo?.cards[2]?.card?.card?.info;
    // itemCards name should be same for api
    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // const categories2 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    // console.log(categories)
    // console.log(categories2)
    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-xl">{cuisines.join(" ,")}</p>
            
            <h2 className="font-bold text-xl">Rating:{avgRating}</h2>
            
            {categories.map((category ,index)=>(
                <RestaurantCategories key={category.card.card.title} data={category.card.card} showItem={index==indexItem && true} setIndexItem={()=> indexItem!==null?setIndexItem(null):setIndexItem(index)}
                />
            ))}
            
        </div>
    )
}

export default  RestaurantMenu;