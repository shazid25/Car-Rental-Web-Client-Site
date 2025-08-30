import React from 'react';
import { createBrowserRouter } from "react-router-dom"; 
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddCars from '../Pages/AddCars/AddCars';
import MyCars from '../Pages/MyCars/MyCars';
import CarDetails from '../Pages/CarDetails/CarDetails';
import EditCar from '../Pages/EditCars/EditCar';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import AvailableCars from '../Pages/AbailableCars/AbailableCars';
import AvailableCarsLayout from '../Components/Layout/AbailableCarsLayout';
import AddCarsLayout from '../Components/Layout/AddCarsLayout';
import MyCarsLayout from '../Components/Layout/MyCarsLayout';
import MyBookingLayout from '../Components/Layout/MyBookingLayout';
import MyBookings from '../Pages/MyBookings/MyBookings';

export const router = createBrowserRouter([
  // Root & Home
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }
    ]
  },

  // Authentication
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // Add Cars
  {
    path: "/add",
    element: <AddCarsLayout />,
    children: [
      { path: "car", element: <PrivateRoute><AddCars /></PrivateRoute> }
    ]
  },

  // My Cars
  {
    path: "/my",
    element: <MyCarsLayout />,
    children: [
      { path: "car", element: <PrivateRoute><MyCars /></PrivateRoute> },
      { path: "bookings", element: <PrivateRoute><MyBookings /></PrivateRoute> }
    ]
  },

  // Car Details
  {
    path: "/cars/:id",   // ✅ fixed
    element: <CarDetails />,
    loader: async ({ params }) => {
      const res = await fetch(`https://car-rent-server-nine.vercel.app/cars/${params.id}`);
      if (!res.ok) throw new Response("Car not found", { status: res.status });
      return res.json();
    },
  },

  // Edit Car
  {
    path: "/edit-car/:id",
    element: <PrivateRoute><EditCar /></PrivateRoute>,
    loader: async ({ params }) => {
      const res = await fetch(`https://car-rent-server-nine.vercel.app/cars/${params.id}`);
      if (!res.ok) throw new Response("Car not found", { status: res.status });
      return res.json();
    },
  },

  // Available Cars
  {
    path: "/available",   // ✅ spelling fixed
    element: <AvailableCarsLayout />,
    children: [
      { path: "cars", element: <AvailableCars /> }
    ]
  }
]);
