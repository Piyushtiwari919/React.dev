import { useEffect, useState } from "react";
// import { Res_List } from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox.js";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9700247&lng=77.6536125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log(data);
      const text = await data.text();
      console.log(text);

      const json = JSON.parse(text);
      console.log(json);
      const finalRes =
        json.data?.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"][
          "restaurants"
        ]; //the data is changing how can i fix it?
      console.log(finalRes);

      setListOfRestaurant(finalRes);
      setFilteredRestaurant(finalRes);

      // setListOfRestaurant(json); : not getting the data as per the requirement of the page
    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return(
      <div>
        <h1>Seems You are Offline.</h1>
        <h3>Please Check your internet connection!!</h3>
      </div>
    )
  }
  /*
  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return(
  //     <Shimmer/>
  //   )
  // }
  */

  console.log("abc first");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        {/* <SearchBox /> */}
        <div className="search-box">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            name="dishes-search"
          />
          <button
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredData);

              setFilteredRestaurant(filteredData);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="filter-box">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((resD) => {
              return resD.info.avgRating > 4.3;
            });
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((resD) => {
          return (
            <Link
              to={"/restaurants/" + resD.info.id}
              key={resD.info.id}
              className="res-links"
            >
              <RestaurantCard resData={resD.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
