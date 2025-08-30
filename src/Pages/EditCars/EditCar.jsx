import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditCar = () => {
  const car = useLoaderData();
  const navigate = useNavigate();

  // If loader data is missing, show fallback
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-xl">Car not found or loading failed.</h2>
      </div>
    );
  }

  const { _id, ...rest } = car;
  const [formData, setFormData] = useState(rest);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (formData.features && name in formData.features) {
      setFormData((prev) => ({
        ...prev,
        features: { ...prev.features, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://car-rent-server-nine.vercel.app/cars/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update car");

      // Sweet 1-second toast alert
      const alertDiv = document.createElement("div");
      alertDiv.textContent = "Car updated successfully!";
      alertDiv.className =
        "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50";
      document.body.appendChild(alertDiv);

      setTimeout(() => {
        document.body.removeChild(alertDiv);
        navigate("/"); // redirect to home
      }, 1000);
    } catch (err) {
      console.error(err);
      alert("Failed to update car.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Edit Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Car Model"
            required
          />
          <input
            type="number"
            name="dailyRentalPrice"
            value={formData.dailyRentalPrice}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Daily Price"
            required
          />
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Registration Number"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Location"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="availability"
              checked={formData.availability}
              onChange={handleChange}
            />
            <span>Available</span>
          </label>
          {formData.features && (
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(formData.features).map((key) => (
                <label key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.features[key]}
                    onChange={handleChange}
                  />
                  {key}
                </label>
              ))}
            </div>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
