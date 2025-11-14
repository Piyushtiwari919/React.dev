import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants.js";
//bad practice
import { resMenuData } from "./menuData.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resName, setResName] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  //*Api Issue here::
  
  const fetchMenu = async () => {
    setResName(resMenuData[0]?.data?.cards[0]?.card?.card?.text);
    /*
    try {
      const data = await fetch(MENU_API_URL);
        const data = await fetch(MENU_API_URL+resId);
        console.log(data);
      const text = await data.text();
      const jsonData = await JSON.parse(text);
        const json = await data.json();
        console.log(json);
        setResInfo(jsonData);
    } catch (error) {
      console.log(error);
    }
    */
   const categories = resMenuData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
    return item?.card?.card?.["@type"].includes("ItemCategory");
   })
    setResInfo(categories);
  };
  // console.log(resInfo);
  

  return {resInfo,resName};
};

export default useRestaurantMenu;
