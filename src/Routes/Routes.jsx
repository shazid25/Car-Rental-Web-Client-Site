
import React from 'react';
import { createBrowserRouter } from "react-router-dom"; // ✅ FIXED import
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ use element instead of Component
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home /> // ✅ element instead of Component
      }
    ]
  },
  {
    path: "/login",
    element: <Login /> // ✅ fixed
  },
  {
    path: "/register",
    element: <Register /> // ✅ fixed
  },
]);
