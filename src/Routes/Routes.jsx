

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
//     element: <AddCars />
//   },
//   {
//     path: "/my-cars",
//     element: <MyCars />
//   },
//   {
//     path: "/cars/:id",
//     element: <CarDetails />,
//     loader: async ({ params }) => {
//       if (!params.id) {
//         throw new Error("Invalid car ID");
//       }

//       const res = await fetch(`http://localhost:3000/cars/${params.id}`);
//       if (!res.ok) {
//         const errorData = await res.json().catch(() => ({}));
//         throw new Error(errorData.error || "Failed to fetch car data");
//       }

//       return res.json(); // return parsed JSON
//     }
//   },
//   {
//     path: "/bookCar/:id",
//     element: (
//       <PrivateRoute>
//         <BookCar />
//       </PrivateRoute>
//     ),
//     loader: async ({ params }) => {
//       if (!params.id) {
//         throw new Error("No car ID provided");
//       }

//       const res = await fetch(`http://localhost:3000/cars/${params.id}`);
//       if (!res.ok) {
//         const errorData = await res.json().catch(() => ({}));
//         throw new Error(errorData.error || "Failed to fetch car data");
//       }

//       return res.json();
//     }
//   }
// ]);






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
//     element:<AddCars />
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
  
]);
