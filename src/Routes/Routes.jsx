// import React from 'react';
// import { createBrowserRouter } from "react-router-dom"; 
// import Root from '../Pages/Root/Root';
// import Errorpage from '../Pages/Errorpage/Errorpage';
// import Home from '../Pages/Home/Home';
// import Login from '../Pages/Login/Login';
// import Register from '../Pages/Register/Register';
// import AddCars from '../Pages/AddCars/AddCars';
// import MyCars from '../Pages/MyCars/MyCars';
// import CarDetails from '../Pages/CarDetails/CarDetails';
// import PrivateRoute from '../PrivateRoutes/PrivateRoute';
// import BookCar from '../Pages/BookCar/BookCar';
// import AbailableCars from '../Pages/AbailableCars/AbailableCars';

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />, 
//     errorElement: <Errorpage />,
//     children: [
//       {
//         index: true,
//         element: <Home /> 
//       }
//     ]
//   },
//   {
//     path: "/login",
//     element: <Login /> 
//   },
//   {
//     path: "/register",
//     element: <Register /> 
//   },
//   {
//     path: "/addCar",
//     element:<PrivateRoute><AddCars /></PrivateRoute>
//   },
//   {
//   path: "/cars/:id",
//   element: <CarDetails />,   // use element, not Component
//   loader: ({ params }) =>
//     fetch(`http://localhost:3000/cars/${params.id}`),
//   },



//   {
//     path: "/my-cars",
//     element: <MyCars/>
//   },
  
//   {
//     path: '/bookCar/:id',
//     element: <PrivateRoute><BookCar></BookCar></PrivateRoute>
//   },
//   {
//     path: '/available-cars',
//     element: <PrivateRoute><AbailableCars></AbailableCars></PrivateRoute>
//   }
  
// ]);



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
import BookCar from '../Pages/BookCar/BookCar';
import AbailableCars from '../Pages/AbailableCars/AbailableCars';

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
    element:<PrivateRoute><AddCars /></PrivateRoute>
  },
  {
  path: "/cars/:id",
  element: <CarDetails />,   // use element, not Component
  loader: ({ params }) =>
    fetch(`http://localhost:3000/cars/${params.id}`),
  },



  {
    path: "/my-cars",
    element: <MyCars/>
  },
  
  {
    path: '/bookCar/:id',
    element: <PrivateRoute><BookCar></BookCar></PrivateRoute>
  },
  {
    path: '/available-cars',
    element: <PrivateRoute><AbailableCars></AbailableCars></PrivateRoute>
  }
  
]);
