import { IMAGE_URL } from "../utils/constant";

const Card = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="card">
      <img
        src={
          IMAGE_URL +
          cloudinaryImageId
        }
        alt="food-img"
        className="card-img"
      />
      <div className="inf">
        <h2 className="name">{name}</h2>
        <h4 className="info-item">{cuisines.join(", ")}</h4>
      </div>

      <div className="time">
        <h4>{costForTwo}</h4>
        <h4>-{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default Card;