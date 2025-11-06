import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // const params = useParams();
  const {resId} = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  //Api Issue here::

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL+resId);
      console.log(data);
      const text = await data.text();
      const jsonData = await JSON.parse(text);
      setResInfo(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  // Refactor the return with api data
  return (
    <div className="menu">
      <h1>Name of Res</h1>
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        height={200}
      />
      <h2>Menu</h2>
      <ul>
        <li>Baby Corn</li>
        <li>Panner Bhurji</li>
        <li>Rajma</li>
        <li>Pulao-Chole</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
