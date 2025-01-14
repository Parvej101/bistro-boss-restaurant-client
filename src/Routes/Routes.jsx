import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/Cart";
import Allusers from "../Layout/Dashboard/Allusers";
import AddItems from "../Layout/Dashboard/AddItems";
import AdminRoutes from "./AdminRoutes";


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
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        // Admin routes
        {
          path: 'users',
          element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
        },
        {
          path: 'addItems',
          element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
      ]
    },
  ]);