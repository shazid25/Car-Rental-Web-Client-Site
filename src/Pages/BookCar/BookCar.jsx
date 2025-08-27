import React from "react";
import { useLoaderData } from "react-router-dom";

const BookCar = () => {
  const car = useLoaderData(); // ✅ comes from loader in routes

  if (!car) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Car not found!
      </div>
    );
  }

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={`${car.imageUrl}?auto=format&fit=crop&w=600&h=400&q=80`}
          alt={car.carModel}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-3">
          <h1 className="text-3xl font-bold text-green-400">
            Booking Confirmed!
          </h1>
          <h2 className="text-2xl font-semibold">{car.carModel}</h2>
          <p className="text-gray-300 text-lg">
            Price: ${car.dailyRentalPrice}/day
          </p>
          <p className="text-gray-400">Reg: {car.registrationNumber}</p>
          <p className="text-gray-400">Location: {car.location}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
