import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9700247&lng=77.6536125&restaurantId=5167&catalog_qa=undefined&submitAction=ENTER"
      );
      console.log(data);
      const text = await data.text();
      console.log(text);
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="menu"></div>;
};

export default RestaurantMenu;
