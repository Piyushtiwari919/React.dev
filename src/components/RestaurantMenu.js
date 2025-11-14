import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const [showIndex, setShowIndex] = useState(null);

  //* Custom Hook
  const {resInfo,resName} = useRestaurantMenu(resId);
  // console.log(resInfo,resName);

  if (resInfo === null) {
    return <Shimmer/>;
  }
  return (
    <div className="text-center my-4">
      <h1 className="text-2xl font-bold my-2">{resName}</h1>
      {/*Categories Accordion*/}
      {resInfo.map((category, index)=>{
        return(
          <RestaurantCategory 
            key={category?.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true:false}
            setShowIndex={() => setShowIndex(index)}
            setHideIndex={()=> setShowIndex(null)}
          />
        )
      })}
    </div>
  );
};

export default RestaurantMenu;

