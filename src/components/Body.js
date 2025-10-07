import { useState } from "react";
import { Res_List } from "../utils/constants.js";
import RestaurantCard from "./RestaurantCard.js";
import SearchBox from "./SearchBox.js";

const Body = () => {
  const [listOfRestaurants , setListOfRestaurant] = useState(Res_List);

  return (
    <div className="body">
      <div className="search-container">
        <SearchBox />
      </div>
      <div className="filter-box">
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter((res)=>{
              return res.rating>4;
            })
            setListOfRestaurant(filteredList);
            console.log(filteredList);
            
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resD) => {
          return <RestaurantCard key={resD.id} resData={resD} />;
        })}
      </div>
    </div>
  );
};

export default Body;
