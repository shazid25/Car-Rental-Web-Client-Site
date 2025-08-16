import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
const AddCars = () => {
  const [formData, setFormData] = useState({
    carModel: '',
    dailyRentalPrice: '',
    availability: true,
    registrationNumber: '',
    features: {
      GPS: false,
      AC: false,
      Bluetooth: false,
      HeatedSeats: false,
      Sunroof: false,
      USBPorts: false,
    },
    description: '',
    bookingCount: 0,
    imageUrl: '',
    location: '',
  });
  
  const formRef = useRef(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    if (formRef.current) {
      formRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('feature-')) {
      const featureName = name.split('-')[1];
      setFormData(prev => ({
        ...prev,
        features: {
          ...prev.features,
          [featureName]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Car added successfully!');
  };

  const handleGoToHome = () => {
    alert('Navigating to home page...');
    // In a real app, you would use routing here
    // e.g., history.push('/') or navigate('/')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-delay-700 {
          animation-delay: 0.7s;
        }
        .animate-delay-800 {
          animation-delay: 0.8s;
        }
        .animate-delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-up animate-delay-100">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            Add New Vehicle
          </h1>
          <p className="text-gray-400">Fill in the details to add a new car to your rental fleet</p>
        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Car Model */}
            <div className="space-y-2 animate-fade-in-up animate-delay-200">
              <label className="block text-cyan-300 font-medium">Car Model</label>
              <input
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="e.g., BMW M3"
                required
              />
            </div>
            
            {/* Daily Rental Price */}
            <div className="space-y-2 animate-fade-in-up animate-delay-200">
              <label className="block text-cyan-300 font-medium">Daily Rental Price ($)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  name="dailyRentalPrice"
                  value={formData.dailyRentalPrice}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 pl-8 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="99.99"
                  required
                />
              </div>
            </div>
            
            {/* Availability */}
            <div className="space-y-2 animate-fade-in-up animate-delay-300">
              <label className="block text-cyan-300 font-medium">Availability</label>
              <div className="relative inline-block w-12 mr-2 align-middle select-none">
                <input 
                  type="checkbox" 
                  name="availability" 
                  id="availability"
                  checked={formData.availability}
                  onChange={handleChange}
                  className="sr-only"
                />
                <label 
                  htmlFor="availability" 
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${formData.availability ? 'bg-cyan-500' : 'bg-gray-600'}`}
                >
                  <span 
                    className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-300 ease-in-out ${formData.availability ? 'translate-x-6' : 'translate-x-0'}`}
                  />
                </label>
              </div>
              <span className="text-gray-300">{formData.availability ? 'Available' : 'Not Available'}</span>
            </div>
            
            {/* Vehicle Registration Number */}
            <div className="space-y-2 animate-fade-in-up animate-delay-300">
              <label className="block text-cyan-300 font-medium">Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="e.g., ABC-1234"
                required
              />
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-6 animate-fade-in-up animate-delay-400">
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
                    className="h-5 w-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-600"
                  />
                  <label htmlFor={`feature-${feature}`} className="ml-2 text-gray-300 capitalize">
                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6 animate-fade-in-up animate-delay-500">
            <label className="block text-cyan-300 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              placeholder="Describe the car, its condition, special features, etc."
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image URL */}
            <div className="space-y-2 animate-fade-in-up animate-delay-600">
              <label className="block text-cyan-300 font-medium">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="https://example.com/car-image.jpg"
                required
              />
            </div>
            
            {/* Location */}
            <div className="space-y-2 animate-fade-in-up animate-delay-600">
              <label className="block text-cyan-300 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="e.g., New York Downtown"
                required
              />
            </div>
          </div>
          
          {/* Preview */}
          <div className="mb-8 p-4 bg-gray-700 rounded-xl border border-gray-600 animate-fade-in-up animate-delay-700">
            <h3 className="text-cyan-300 font-medium mb-3">Car Preview</h3>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {formData.imageUrl ? (
                <img 
                  src={formData.imageUrl} 
                  alt="Car preview" 
                  className="w-full sm:w-64 h-48 object-cover rounded-lg border border-gray-600 transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="bg-gray-600 border-2 border-dashed border-gray-500 w-full sm:w-64 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Image preview</span>
                </div>
              )}
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{formData.carModel || "Car Model"}</h4>
                <p className="text-cyan-400 text-lg font-semibold mb-3">
                  ${formData.dailyRentalPrice ? parseFloat(formData.dailyRentalPrice).toFixed(2) : "0.00"} / day
                </p>
                <p className="text-gray-300 mb-3">{formData.description || "No description provided"}</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(formData.features)
                    .filter(([_, checked]) => checked)
                    .map(([feature]) => (
                      <span key={feature} className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        {feature.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-800">
            <button 
              type="submit"
              className="relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
            >
              <span className="relative z-10">Add Car to Fleet</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* <button 
              type="button"
              onClick={handleGoToHome}
              className="relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-800/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Go to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button> */}


            <Link to="/">
  <button 
    type="button"
    className="relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-800/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
  >
    <span className="relative z-10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      Go to Home
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</Link>
          </div>
        </form>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-32 h-32 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <style jsx global>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AddCars;