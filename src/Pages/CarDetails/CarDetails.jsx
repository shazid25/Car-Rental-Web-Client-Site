// import React from "react";
// import { useLoaderData, Link, useNavigate } from "react-router-dom";

// const CarDetails = () => {
//   const car = useLoaderData();
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     const confirm = window.confirm("Are you sure you want to delete this car?");
//     if (!confirm) return;

//     const res = await fetch(`http://localhost:3000/cars/${car._id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       alert("Car deleted successfully!");
//       navigate("/my-cars");
//     } else {
//       alert("Failed to delete car.");
//     }
//   };

//   return (
//     <div className="p-6 text-white bg-gray-900 min-h-screen">
//       <div className="max-w-xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//         <img src={car.imageUrl} alt={car.carModel} className="w-full h-64 object-cover" />
//         <div className="p-6">
//           <h2 className="text-2xl font-bold">{car.carModel}</h2>
//           <p className="mt-2">{car.description}</p>
//           <p className="mt-2 font-semibold">Price: ${car.dailyRentalPrice}/day</p>
//           <p className="mt-2">Location: {car.location}</p>
//           <div className="flex justify-between mt-4">
//             <Link to={`/edit/${car._id}`} className="bg-blue-600 px-4 py-2 rounded-lg">Edit</Link>
//             <button onClick={handleDelete} className="bg-red-600 px-4 py-2 rounded-lg">Delete</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;



import React from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";

const CarDetails = () => {
  const car = useLoaderData();
  const navigate = useNavigate();

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-xl">Car details not found.</h2>
      </div>
    );
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this car?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/cars/${car._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Car deleted successfully!");
        navigate("/my/car");
      } else {
        alert("Failed to delete car.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting car.");
    }
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={car.imageUrl || "https://via.placeholder.com/400x250"}
          alt={car.carModel}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-2">
          <h2 className="text-2xl font-bold">{car.carModel}</h2>
          <p>{car.description || "No description available."}</p>
          <p className="font-semibold mt-2">Price: ${car.dailyRentalPrice}/day</p>
          <p>Location: {car.location}</p>
          <p className={car.availability ? "text-green-400 font-medium" : "text-red-500 font-medium"}>
            {car.availability ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="flex justify-between p-6 border-t border-gray-700">
          <Link
            to={`/edit-car/${car._id}`}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
