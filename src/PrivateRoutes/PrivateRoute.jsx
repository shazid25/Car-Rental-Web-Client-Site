// // import React from 'react'
// // import { AuthContext } from '../contexts/AuthContext/AuthProvider'
// // import { Navigate } from 'react-router';

// // const PrivateRoute = ({children}) => {

// //    const {usr} = use(AuthContext);

// //    if(!usr){
// //     <Navigate to="/register" ></Navigate>
// //    }

// //   return children;
// // };

// // export default PrivateRoute;



// import React, { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { user } = useContext(AuthContext); 
//   const location = useLocation();
//   console.log(location.pathname);

//   if (!user) {
//     return <Navigate to="/register" state={location.pathname} />; 
//   }

//   return children;
// };

// export default PrivateRoute;



import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/register" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
