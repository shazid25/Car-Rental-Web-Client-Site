// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const LatestCars = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3000/cars")
//       .then((res) => res.json())
//       .then((data) => {
//         setCars(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching cars:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <p className="text-center text-lg text-white mt-10">Loading cars...</p>
//     );
//   }

//   return (
//     <div className="p-6 rounded-2xl bg-gray-900 min-h-screen text-white">
//       <h2 className="text-3xl text-center font-bold mb-6 animate-pulse">
//         Latest Cars ({cars.length})
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {cars.map((car, index) => (
//           <motion.div
//             key={car._id}
//             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
//             initial={{ opacity: 0, y: 50, rotate: -2 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.8,
//               delay: index * 0.1,
//               type: "spring",
//               stiffness: 100,
//             }}
//           >
//             <img
//               src={`${car.imageUrl}?auto=format&fit=crop&w=400&h=250&q=80`}
//               alt={car.carModel}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <h3 className="text-xl font-semibold">{car.carModel}</h3>
//               <p className="text-gray-300">${car.dailyRentalPrice}/day</p>
//               <p className="text-gray-400">Reg: {car.registrationNumber}</p>
//               <p
//                 className={`font-medium ${
//                   car.availability ? "text-green-400" : "text-red-500"
//                 }`}
//               >
//                 {car.availability ? "Available" : "Not Available"}
//               </p>
//               <p className="text-gray-400 text-sm">Location: {car.location}</p>
//             </div>
//             <div className="p-4 border-t border-gray-700">
//               {/* Correct Link to Car Details */}
//               <Link to={`/cars/${car._id}`}>
//                 <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCars;




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LatestCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center text-lg text-white mt-10">Loading cars...</p>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl text-center font-bold mb-6 animate-pulse">
        Latest Cars ({cars.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <motion.div
            key={car._id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <img
              src={car.imageUrl || "https://via.placeholder.com/400x250"}
              alt={car.carModel}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{car.carModel}</h3>
              <p className="text-gray-300">${car.dailyRentalPrice}/day</p>
              <p className="text-gray-400">Reg: {car.registrationNumber}</p>
              <p
                className={`font-medium ${
                  car.availability ? "text-green-400" : "text-red-500"
                }`}
              >
                {car.availability ? "Available" : "Not Available"}
              </p>
              <p className="text-gray-400 text-sm">Location: {car.location}</p>
            </div>
            <div className="p-4 border-t border-gray-700">
              {/* Link to Car Details */}
              <Link to={`/cars/${car._id}`}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestCars;
