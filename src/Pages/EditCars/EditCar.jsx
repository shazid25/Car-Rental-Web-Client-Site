import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditCar = () => {
  const car = useLoaderData();
  const navigate = useNavigate();

  // Exclude _id from editable data
  const { _id, ...rest } = car;
  const [formData, setFormData] = useState(rest);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.features) {
      setFormData({
        ...formData,
        features: { ...formData.features, [name]: checked },
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "number") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/cars/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update car");

      alert("Car updated successfully!");
      navigate("/my-cars");
    } catch (err) {
      console.error(err);
      alert("Failed to update car. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Car Model"
          />
          <input
            type="number"
            name="dailyRentalPrice"
            value={formData.dailyRentalPrice}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Daily Rental Price"
          />
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Registration Number"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 text-black"
            placeholder="Description"
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

          <div className="grid grid-cols-2 gap-2">
            {Object.keys(formData.features).map((key) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={formData.features[key]}
                  onChange={handleChange}
                />
                <span>{key}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate("/my-cars")}
              className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
