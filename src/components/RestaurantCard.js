import { CDN_URL } from "../utils/constants.JS";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL+resData.cloudinaryImageId} />
      <h3 className="res-name">{resData.name}</h3>
      <h4 className="res-icon">
        <i className="fa-regular fa-star"></i> {resData.avgRating}
      </h4>
      <h4>{resData.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;