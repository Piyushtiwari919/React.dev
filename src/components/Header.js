import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = ({ logo }) => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // useEffect(()=>{
  //   console.log("Hello from useEffect");
  // },[btnName])
  // console.log("Header Rendered");
  
  return (
    <div className="flex items-center justify-evenly m-2 rounded-2xl  border-amber-900 border-2 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={logo} alt="website-logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-2 p-4 justify-between">
          <li className="m-2 p-2">
            {onlineStatus ? "✅":"🔴"}
          </li>
          <li className="m-2 p-2">
            <Link to="/">Home</Link>
          </li >
          <li className="m-2 p-2"><Link to="/about">About Us</Link></li>
          <li className="m-2 p-2"><Link to="/grocery">Grocery</Link></li>
          <li className="m-2 p-2"><Link to="/contact">Contact Us</Link></li>
          <li className="m-2 p-2">Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
