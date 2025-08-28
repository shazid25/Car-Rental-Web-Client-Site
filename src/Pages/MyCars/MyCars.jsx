import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { Link } from "react-router-dom";

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

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    try {
      await fetch(`http://localhost:3000/cars/${id}`, { method: "DELETE" });
      setCars(cars.filter((car) => car._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">My Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div
              key={car._id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={car.imageUrl || "https://via.placeholder.com/400x250"}
                alt={car.carModel}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{car.carModel}</h3>
                <p>Daily Price: ${car.dailyRentalPrice}/day</p>
                <p>Availability: {car.availability ? "Available" : "Not Available"}</p>
                <p>Location: {car.location}</p>
                <p className="text-gray-400 text-sm">
                  Date Added: {car.createdAt ? new Date(car.createdAt).toLocaleDateString() : "N/A"}
                </p>
              </div>

              <div className="p-4 border-t border-gray-700 flex justify-between">
             <Link to={`/edit-car/${car._id}`}>
  <button className="bg-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-600 transition">
    Edit
  </button>
</Link>

                <button
                  onClick={() => handleDelete(car._id)}
                  className="bg-red-600 px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-3">You haven't added any cars yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyCars;
