import { CDN_URL } from "../utils/contants";

const Card =(props)=>{
    const {resData}= props;
    const {name , cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info
    return(
        <div className="card">
            <img src={CDN_URL+cloudinaryImageId} alt="food-img" className="card-img" />
            <div className="inf">
            <h2 className="name">{name}</h2>
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

export default Card;