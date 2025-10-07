import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:../public/eatables.png";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";



const AppLayout = () => {
  console.log(<Body/>);
  
  return (
    <div className="app">
      <Header logo={logo}/>
      <Body />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
