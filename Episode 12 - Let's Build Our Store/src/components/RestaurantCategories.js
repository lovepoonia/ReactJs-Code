// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({data,showItem, setIndexItem}) =>{
    // const [showItem, setShowItem] = useState(false);

    const handelClick = () =>{
        setIndexItem();
    }
    // console.log(data)
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg shadow-gray-300  p-4">
            <div className="flex justify-between cursor-pointer" onClick={handelClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>{showItem?"🔼":"🔽"}</span>
            </div>
              
               {showItem && <ItemList item={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategories;