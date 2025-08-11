import React from 'react'
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path:"/",
        Component: Home
      }
    ]
   },

   {
    path:"/login",
    Component: Login
   },
   {
    path:"/register",
    Component: Register
   },
]);