import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import logo from "url:../public/eatables.png";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  // console.log(<Body/>);

  return (
    <div className="app">
      <Header logo={logo} />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

/*
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
