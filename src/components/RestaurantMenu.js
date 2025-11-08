import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const {resId} = useParams();

  //* Custom Hook
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu-res">
      <h1>{resInfo?.name}</h1>
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        height={200}
      />
      <p>{resInfo?.cuisines.join(", ")}</p>
      <p>Rating : {resInfo?.avgRating}</p>
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
