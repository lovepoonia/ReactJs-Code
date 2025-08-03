import { CDN_URL } from "../utils/contants";

const Card =(props)=>{
    const {resData}= props;
    const {name , cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info
    return(
        <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg">
            <img src={CDN_URL+cloudinaryImageId} alt="food-img" className=" rounded-lg" />
            <div className="inf">
            <h2 className="font-bold">{name}</h2>
            <h4 className="info-item">{cuisines.join(", ")}</h4>
            </div>
            
            <div className="time">
                <h4>{costForTwo}</h4>
                <h4>-{avgRating}</h4>
                <h4>{resData.info.sla.deliveryTime}m</h4>
            </div>

        </div>
    )
}

export const vegCard = (Card) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Card {...props}/>
            </div>
        )
    }
}

export default Card;