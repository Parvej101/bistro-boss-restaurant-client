import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <Menu></Menu>
        },
        {
          path: 'orderFood/:category',
          element:<Order></Order>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
      ]
    },
  ]);