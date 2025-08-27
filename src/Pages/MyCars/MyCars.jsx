import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/cars?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-bold mb-6">My Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div
              key={car._id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={car.imageUrl || "https://via.placeholder.com/400x250"}
                alt={car.carModel}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{car.carModel}</h3>
                <p>
                  <span className="font-semibold">Daily Price:</span> ${car.dailyRentalPrice}/day
                </p>
                <p>
                  <span className="font-semibold">Availability:</span>{" "}
                  {car.availability ? "Available" : "Not Available"}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {car.location}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold">Date Added:</span>{" "}
                  {car.createdAt ? new Date(car.createdAt).toLocaleDateString() : "N/A"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-400">You haven't added any cars yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyCars;
