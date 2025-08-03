import { CDN_URL } from "../utils/contants";

const ItemList = ({item}) => {
    console.log(item);
    
    return(
        <div>
            {item.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between">
                    <div>
                    <div className="py-2 "><span className="font-bold">{item.card.info.name}</span> 
                    <div>-₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</div></div>
                    <div className="py-2">⭐{item.card.info.ratings.aggregatedRating.rating || 0}  ({item.card.info.ratings.aggregatedRating.ratingCountV2 || 0})</div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 bg-black shadow-lg text-white rounded ">Add +</button>
                    </div>
                    <img src={CDN_URL+ item.card.info.imageId} alt="New Add Coming Soon..." className="w-full"/>
                    
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default ItemList