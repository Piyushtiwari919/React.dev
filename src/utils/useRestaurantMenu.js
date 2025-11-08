import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants.js";
//bad practice
import { resMenuData } from "./menuData.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  //*Api Issue here::

  const fetchMenu = async () => {
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
    setResInfo(resMenuData[0]?.card?.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
