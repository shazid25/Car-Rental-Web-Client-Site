// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const AvailableCars = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/cars"); // Fetch all cars
//         const data = await res.json();
//         setCars(data);
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Loading cars...
//       </div>
//     );
//   }

//   if (cars.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         No cars available.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen rounded-2xl bg-gray-900 py-8 px-4">
//       <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
//         All Cars
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cars.map((car) => (
//           <div
//             key={car._id}
//             className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col"
//           >
//             <img
//               src={car.imageUrl}
//               alt={car.carModel}
//               className="h-48 w-full object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-xl font-bold text-white">{car.carModel}</h2>
//             <p className="text-cyan-400 font-semibold mb-2">
//               ${parseFloat(car.dailyRentalPrice).toFixed(2)} / day
//             </p>
//             <p className="text-gray-300 mb-2">
//               <strong>Availability:</strong>{" "}
//               {car.availability ? "Available" : "Not Available"}
//             </p>
//             <p className="text-gray-300 mb-2">
//               <strong>Location:</strong> {car.location}
//             </p>
//             <p className="text-gray-300 mb-2">
//               <strong>Registration:</strong> {car.registrationNumber}
//             </p>
//             <div className="flex flex-wrap gap-2 mb-2">
//               {Object.entries(car.features)
//                 .filter(([_, v]) => v)
//                 .map(([feature]) => (
//                   <span
//                     key={feature}
//                     className="bg-cyan-900 text-cyan-300 px-2 py-1 rounded-full text-sm"
//                   >
//                     {feature.replace(/([A-Z])/g, " $1").trim()}
//                   </span>
//                 ))}
//             </div>
//             <p className="text-gray-300">{car.description}</p>
//             <Link
//               to={`/cars/${car._id}`}
//               className="mt-4 inline-block bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg text-center"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableCars;






import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import framer-motion

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:3000/cars"); // Fetch all cars
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading cars...
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No cars available.
      </div>
    );
  }

  return (
    <div className="min-h-screen rounded-2xl bg-gray-900 py-8 px-4">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        All Cars
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <motion.div
            key={car._id}
            className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }} // ✅ stagger animation
          >
            <img
              src={car.imageUrl}
              alt={car.carModel}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-white">{car.carModel}</h2>
            <p className="text-cyan-400 font-semibold mb-2">
              ${parseFloat(car.dailyRentalPrice).toFixed(2)} / day
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Availability:</strong>{" "}
              {car.availability ? "Available" : "Not Available"}
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Location:</strong> {car.location}
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Registration:</strong> {car.registrationNumber}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {Object.entries(car.features)
                .filter(([_, v]) => v)
                .map(([feature]) => (
                  <span
                    key={feature}
                    className="bg-cyan-900 text-cyan-300 px-2 py-1 rounded-full text-sm"
                  >
                    {feature.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                ))}
            </div>
            <p className="text-gray-300">{car.description}</p>
            <Link
              to={`/cars/${car._id}`}
              className="mt-4 inline-block bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg text-center"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
