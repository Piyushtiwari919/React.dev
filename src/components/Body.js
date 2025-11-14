import { useContext, useEffect, useState } from "react";
// import { Res_List } from "../utils/mockData.js";
import RestaurantCard, { IsOpenLabel } from "./RestaurantCard.js";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox.js";
import Shimmer from "./Shimmer.js";
import UserContext from "../utils/UserContext.js";
import useOnlineStatus from "../../src/utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const OpenRestaurantCard = IsOpenLabel(RestaurantCard);
  const {loggedInUser,setUserName} = useContext(UserContext);

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
      // console.log(text);

      const json = JSON.parse(text);
      // console.log(json);
      const cardObj = json?.data?.cards.find(
        (item) => item.card?.card.id.includes("top_brands_for_you")
        // item.card?.card.id.includes("restaurant_grid_listing")
      );
      // console.log(cardObj);
      const finalRes =
        cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log(finalRes);

      setListOfRestaurant(finalRes);
      setFilteredRestaurant(finalRes);

      // setListOfRestaurant(json); : not getting the data as per the requirement of the page
    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Seems You are Offline.</h1>
        <h3>Please Check your internet connection!!</h3>
      </div>
    );
  }
  /*
  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return(
  //     <Shimmer/>
  //   )
  // }
  */

  // console.log("abc first");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex text-center flex-col m-2">
      <div className="search-container">
        {/* <SearchBox /> */}
        <div className="search-box mx-2 my-6 p-2 text-md rounded-2xl flex items-center border-amber-800 border-2 w-70 hover:border-blue-800">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            name="dishes-search"
            className="m-1 p-1 w-52 outline-none text-cyan-950 font-medium bg-white"
          />
          <button
            onClick={() => {
              if (searchText !== "") {
                const filteredData = listOfRestaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRestaurant(filteredData);
              }
              // console.log(filteredData);
            }}
            className="hover:cursor-pointer"
          >
            <i className="fa-solid fa-magnifying-glass text-lg hover:text-pink-500"></i>
          </button>
        </div>
        <div className="search-box mx-2 my-6 p-2 text-md rounded-2xl flex items-center border-orange-400 border-2 w-70 hover:border-blue-800">
          <input
            type="text"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}
            className="m-1 p-1 w-52 outline-none text-fuchsia-900 font-medium bg-white"
          />
        </div>
      </div>
      <div className="filter-box mx-2 my-2">
        <button
          className="filter-btn border-cyan-700 border-2 cursor-pointer rounded-md p-2 hover:bg-amber-800 hover:text-white"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((resD) => {
              return resD.info.avgRating > 4.3;
            });
            setFilteredRestaurant(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex gap-3 my-4 flex-wrap justify-center">
        {filteredRestaurant.map((resD) => {
          return (
            <Link
              to={"/restaurants/" + resD.info.id}
              key={resD.info.id}
              className="res-links my-2 flex flex-col items-center rounded-lg w-56 hover:bg-amber-300"
            >
              {resD.info.isOpen ? (
                <OpenRestaurantCard resData={resD.info} />
              ) : (
                <RestaurantCard resData={resD.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
