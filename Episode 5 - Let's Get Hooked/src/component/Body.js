import resList from "../utils/mockdata";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  const [back, setBack] = useState(true);

  const filterTopRated = () => {
    const topRated = restaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5);
    setRestaurants(topRated);
    setBack(false);
    }

    const backToHome = () => {
        setRestaurants(resList);
        setBack(true);
    }

  return (
    <div className="body">
      <div className="top">
        <button className="top-btn"onClick={back?filterTopRated:backToHome} >{back?"Top Rated Restaurants":"Back to home"}</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
