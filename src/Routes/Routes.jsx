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
import ManageItems from "../Layout/Dashboard/ManageItems";
import UpdateItems from "../Layout/Dashboard/UpdateItems";
import Payment from "../Layout/Dashboard/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory";
import UserHome from "../Layout/Dashboard/UserHome";
import AdminHome from "../Layout/Dashboard/AdminHome";



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
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // Admin routes
        {
          path: 'users',
          element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
        },
        {
          path: 'adminHome',
          element: <AdminRoutes> <AdminHome></AdminHome> </AdminRoutes>
        },
        {
          path: 'addItems',
          element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
      ]
    },
  ]);