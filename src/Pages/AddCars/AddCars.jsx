import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const AddCars = () => {
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    carModel: "",
    dailyRentalPrice: "",
    availability: true,
    registrationNumber: "",
    features: {
      GPS: false,
      AC: false,
      Bluetooth: false,
      HeatedSeats: false,
      Sunroof: false,
      USBPorts: false,
    },
    description: "",
    imageUrl: "",
    location: "",
  });

  useEffect(() => {
    if (formRef.current) {
      formRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("feature-")) {
      const featureName = name.split("-")[1];
      setFormData((prev) => ({
        ...prev,
        features: { ...prev.features, [featureName]: checked },
      }));
    } else if (type === "checkbox" && name === "availability") {
      setFormData((prev) => ({ ...prev, availability: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      alert("You must be logged in to add a car.");
      return;
    }

    const carToAdd = { ...formData, email: user.email, createdAt: new Date() };

    try {
      const res = await fetch("http://localhost:3000/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carToAdd),
      });
      const data = await res.json();
      if (data.insertedId) {
        alert("Car added successfully!");
        formRef.current.reset();
        setFormData({
          carModel: "",
          dailyRentalPrice: "",
          availability: true,
          registrationNumber: "",
          features: {
            GPS: false,
            AC: false,
            Bluetooth: false,
            HeatedSeats: false,
            Sunroof: false,
            USBPorts: false,
          },
          description: "",
          imageUrl: "",
          location: "",
        });
      }
    } catch (error) {
      console.error("Error adding car:", error);
      alert("Failed to add car.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s forwards; opacity: 0; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            Add New Vehicle
          </h1>
          <p className="text-gray-400">Fill in the details to add a new car to your rental fleet</p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleAddCar}
          className="bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Car Model */}
            <div className="space-y-2">
              <label className="block text-cyan-300 font-medium">Car Model</label>
              <input
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="e.g., BMW M3"
                required
              />
            </div>

            {/* Daily Rental Price */}
            <div className="space-y-2">
              <label className="block text-cyan-300 font-medium">Daily Rental Price ($)</label>
              <input
                type="number"
                name="dailyRentalPrice"
                value={formData.dailyRentalPrice}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="99.99"
                required
              />
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <label className="block text-cyan-300 font-medium">Availability</label>
              <span className="text-gray-300">{formData.availability ? "Available" : "Not Available"}</span>
              <input
                type="checkbox"
                name="availability"
                checked={formData.availability}
                onChange={handleChange}
                className="ml-2"
              />
            </div>

            {/* Registration Number */}
            <div className="space-y-2">
              <label className="block text-cyan-300 font-medium">Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="e.g., ABC-1234"
                required
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <label className="block text-cyan-300 font-medium mb-3">Features</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {Object.entries(formData.features).map(([feature, checked]) => (
                <div key={feature} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`feature-${feature}`}
                    name={`feature-${feature}`}
                    checked={checked}
                    onChange={handleChange}
                    className="h-5 w-5 text-cyan-500 bg-gray-700 border-gray-600 rounded"
                  />
                  <label htmlFor={`feature-${feature}`} className="ml-2 text-gray-300 capitalize">
                    {feature.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-cyan-300 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Describe the car, its condition, special features, etc."
              required
            ></textarea>
          </div>

          {/* Image URL & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-cyan-300 font-medium">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="https://example.com/car-image.jpg"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-cyan-300 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="e.g., New York Downtown"
                required
              />
            </div>
          </div>

          {/* Overview / Preview Section */}
          <div className="mb-8 p-4 bg-gray-700 rounded-xl border border-gray-600">
            <h3 className="text-cyan-300 font-medium mb-3">Overview</h3>
            <div className="text-gray-300 space-y-1">
              <p><strong>Model:</strong> {formData.carModel || "N/A"}</p>
              <p><strong>Price:</strong> ${formData.dailyRentalPrice || "N/A"}</p>
              <p><strong>Availability:</strong> {formData.availability ? "Available" : "Not Available"}</p>
              <p><strong>Registration:</strong> {formData.registrationNumber || "N/A"}</p>
              <p><strong>Features:</strong> {Object.entries(formData.features).filter(([_, v]) => v).map(([k]) => k).join(", ") || "None"}</p>
              <p><strong>Description:</strong> {formData.description || "N/A"}</p>
              <p><strong>Location:</strong> {formData.location || "N/A"}</p>
              {formData.imageUrl && (
                <img src={formData.imageUrl} alt="Car" className="mt-2 rounded-lg w-full h-48 object-cover" />
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Add Car to Fleet
            </button>

            <Link to="/">
              <button
                type="button"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Go to Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCars;
