import React from 'react';
import { createBrowserRouter } from "react-router-dom"; 
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddCars from '../Pages/AddCars/AddCars';
import MyCars from '../Pages/MyCars/MyCars';
import CarDetails from '../Pages/CarDetails/CarDetails';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import AbailableCars from '../Pages/AbailableCars/AbailableCars';
import AbailableCarsLayout from '../Components/Layout/AbailableCarsLayout';
import AddCarsLayout from '../Components/Layout/AddCarsLayout';
import MyCarsLayout from '../Components/Layout/MyCarsLayout';
import MyBookingLayout from '../Components/Layout/MyBookingLayout';
import MyBookings from '../Pages/MyBookings/MyBookings';
import EditCar from '../Pages/EditCars/EditCar';
// import BookCar from '../Pages/BookCar/BookCar';

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
    path:"/add",
    Component: AddCarsLayout,
    children: [
      {
        path:"/add/car",
         element: <PrivateRoute><AddCars /></PrivateRoute>
      }
    ]
  },
  {
  path: "/cars/:id",
  element: <CarDetails />,   // use element, not Component
  loader: ({ params }) =>
    fetch(`http://localhost:3000/cars/${params.id}`),
  },


   {
    path:"/my",
    Component: MyCarsLayout,
    children: [
      {
        path:"/my/car",
         element: <PrivateRoute><MyCars /></PrivateRoute>
      }
    ]
  },
  

// {
//   path: "/edit-car/:id",
//   element: <PrivateRoute><EditCar /></PrivateRoute>,
// },

{
  path: "/edit-car/:id",
  element: <PrivateRoute><EditCar /></PrivateRoute>,
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:3000/cars/${params.id}`);
    if (!res.ok) throw new Response("Car not found", { status: res.status });
    return res.json();
  },
},
  // {
  //   path: '/bookCar/:id',
  //   element: <PrivateRoute><BookCar></BookCar></PrivateRoute>
  // },
  
  {
    path:"/abailable",
    Component: AbailableCarsLayout,
    children: [
      {
        path:"/abailable/cars",
         element:<AbailableCars></AbailableCars>
      }
    ]
  },

   {
    path:"/my",
    Component: MyBookingLayout,
    children: [
      {
        path:"/my/bookings",
         element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      }
    ]
  },
]);
