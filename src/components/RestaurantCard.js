const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={resData.imageL} />
      <h3 className="res-name">{resData.name}</h3>
      <h4 className="res-icon">
        <i className="fa-regular fa-star"></i> {resData.rating}
      </h4>
      <h4>{resData.cuisines}</h4>
    </div>
  );
};

export default RestaurantCard;