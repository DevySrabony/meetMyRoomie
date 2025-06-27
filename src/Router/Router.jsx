import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import LogIn from "../Components/LogIn/LogIn";
// import Loader from "../Components/Loader/Loader";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import RoommateDetails from "../Components/Home/RoommateDetails";
import AddRoommate from "../Components/AddRoommate/AddRoommate";
import BrowseListing from "../Components/BrowseListing/BrowseListing";
import MyListings from "../Components/MyListings/MyListings";
import UpdateRoommate from "../Components/UpdateRoommate/UpdateRoommate";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/register' ,
                Component: Register
            },
            {
                path:'login' ,
                Component:LogIn
            },
            {
                path:'/roommates/:id' ,
                element: <PrivateRoute>
                    <RoommateDetails></RoommateDetails>
                </PrivateRoute>
            },
            {
                path:'/add-roommate' ,
                element: <PrivateRoute>
                    <AddRoommate></AddRoommate>
                </PrivateRoute>
               
            },
            {
                path:'/browse' ,
                Component: BrowseListing
            },
            {
                path:'/my-listings' ,
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>
            },
            {
                 path:"/update-roommate/:id",
                 element: <PrivateRoute>
                    <UpdateRoommate></UpdateRoommate>
                 </PrivateRoute>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element :<PrivateRoute>
             <DashboardLayout></DashboardLayout>
        </PrivateRoute>
    }
])