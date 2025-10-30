import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  const [btnName, setBtnName] = useState("Login");

  // useEffect(()=>{
  //   console.log("Hello from useEffect");
  // },[btnName])
  // console.log("Header Rendered");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="website-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
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
