// import React from "react";
// import { useLoaderData, Link } from "react-router-dom";

// const CarDetails = () => {
//   const car = useLoaderData(); // this is actual JSON from backend
//   console.log(car);

//   if (!car || car.error) {
//     return (
//       <div className="text-center text-red-500 mt-10 text-xl">
//         {car?.error || "Car not found!"}
//       </div>
//     );
//   }

//   const formattedDate = car.createdAt
//     ? new Date(car.createdAt).toLocaleDateString()
//     : "Unknown";

//   return (
//     <div className="p-6 text-white bg-gray-900 min-h-screen">
//       <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//         <img
//           src={car.imageUrl || "https://via.placeholder.com/600x400"}
//           alt={car.carModel}
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-6 space-y-3">
//           <h2 className="text-3xl font-bold">{car.carModel}</h2>
//           <p className="text-gray-300 text-lg">
//             <strong>Price:</strong> ${parseFloat(car.dailyRentalPrice).toFixed(2)}/day
//           </p>
//           <p className="text-gray-400">
//             <strong>Registration:</strong> {car.registrationNumber}
//           </p>
//           <p
//             className={`font-medium ${
//               car.availability ? "text-green-400" : "text-red-500"
//             }`}
//           >
//             {car.availability ? "Available" : "Not Available"}
//           </p>
//           <p className="text-gray-400">
//             <strong>Location:</strong> {car.location}
//           </p>
//           <p className="text-gray-400">
//             <strong>Date Added:</strong> {formattedDate}
//           </p>
//           <p className="text-gray-300">
//             <strong>Description:</strong> {car.description || "No description"}
//           </p>

//           {/* Features */}
//           {car.features && Object.keys(car.features).length > 0 && (
//             <div className="flex flex-wrap gap-2 mt-2">
//               {Object.entries(car.features)
//                 .filter(([_, v]) => v)
//                 .map(([feature]) => (
//                   <span
//                     key={feature}
//                     className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm"
//                   >
//                     {feature.replace(/([A-Z])/g, " $1").trim()}
//                   </span>
//                 ))}
//             </div>
//           )}
//         </div>

//         <div className="p-6 border-t border-gray-700 flex justify-between gap-4">
//           <Link
//             to="/"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//           >
//             Back to Cars
//           </Link>

//           <Link to={`/bookCar/${car._id || car.id}`}>
//             <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;





import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const CarDetails = () => {
  const car = useLoaderData(); // JSON from backend

  if (!car || car.error) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        {car?.error || "Car not found!"}
      </div>
    );
  }

  const formattedDate = car.createdAt
    ? new Date(car.createdAt).toLocaleDateString()
    : "Unknown";

  return (
    <div className="p-6 text-white rounded-2xl bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={car.imageUrl || "https://via.placeholder.com/600x400"}
          alt={car.carModel}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-3xl font-bold">{car.carModel}</h2>
          <p className="text-gray-300 text-lg">
            <strong>Price:</strong> ${parseFloat(car.dailyRentalPrice).toFixed(2)}/day
          </p>
          <p className="text-gray-400">
            <strong>Registration:</strong> {car.registrationNumber}
          </p>
          <p
            className={`font-medium ${
              car.availability ? "text-green-400" : "text-red-500"
            }`}
          >
            {car.availability ? "Available" : "Not Available"}
          </p>
          <p className="text-gray-400">
            <strong>Location:</strong> {car.location}
          </p>
          <p className="text-gray-400">
            <strong>Date Added:</strong> {formattedDate}
          </p>
          <p className="text-gray-300">
            <strong>Description:</strong> {car.description || "No description"}
          </p>

          {/* Features */}
          {car.features && Object.keys(car.features).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {Object.entries(car.features)
                .filter(([_, v]) => v)
                .map(([feature]) => (
                  <span
                    key={feature}
                    className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {feature.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                ))}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-700 flex justify-between gap-4">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Back to Cars
          </Link>

          <Link to={`/bookCar/${car._id}`}>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

