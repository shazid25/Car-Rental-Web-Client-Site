// import React from "react";
// import { useLoaderData, Link } from "react-router-dom";

// const CarDetails = () => {
//   const car = useLoaderData();
//   console.log(car);

//   return (
//     <div className="p-6 text-white bg-gray-900 min-h-screen">
//       <div className="max-w-xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//         <img
//           src={`${car.imageUrl}?auto=format&fit=crop&w=600&h=400&q=80`}
//           alt={car.carModel}
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-6 space-y-3">
//           <h2 className="text-3xl font-bold">{car.carModel}</h2>
//           <p className="text-gray-300 text-lg">${car.dailyRentalPrice}/day</p>
//           <p className="text-gray-400">Reg: {car.registrationNumber}</p>
//           <p
//             className={`font-medium ${
//               car.availability ? "text-green-400" : "text-red-500"
//             }`}
//           >
//             {car.availability ? "Available" : "Not Available"}
//           </p>
//           <p className="text-gray-400">Location: {car.location}</p>
//         </div>

//         <div className="p-6 border-t border-gray-700 flex justify-between">
//           <Link
//             to="/"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//           >
//             Back to Cars
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
  const car = useLoaderData();
  console.log(car);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={`${car.imageUrl}?auto=format&fit=crop&w=600&h=400&q=80`}
          alt={car.carModel}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-3xl font-bold">{car.carModel}</h2>
          <p className="text-gray-300 text-lg">${car.dailyRentalPrice}/day</p>
          <p className="text-gray-400">Reg: {car.registrationNumber}</p>
          <p
            className={`font-medium ${
              car.availability ? "text-green-400" : "text-red-500"
            }`}
          >
            {car.availability ? "Available" : "Not Available"}
          </p>
          <p className="text-gray-400">Location: {car.location}</p>
        </div>

        {/* Buttons */}
        <div className="p-6 border-t border-gray-700 flex justify-between gap-4">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Back to Cars
          </Link>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
            onClick={() => alert(`Booking initiated for ${car.carModel}`)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
