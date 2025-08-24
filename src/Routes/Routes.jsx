
import React from 'react';
import { createBrowserRouter } from "react-router-dom"; 
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddCars from '../Pages/AddCars/AddCars';
import MyCars from '../Pages/MyCars/MyCars';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home /> 
      }
    ]
  },
  {
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/register",
    element: <Register /> 
  },
  {
    path: "/addCar",
    element:<AddCars />
  },
  {
    path: "/my-cars",
    element: <MyCars/>
  },
  
]);
