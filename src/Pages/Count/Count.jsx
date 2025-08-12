import React, { useState, useEffect, useRef } from 'react';

// Count Component
const Count = ({
  value = 100,
  title = "Projects Completed",
  duration = 2000,
  prefix = "",
  suffix = "+",
  color = "#3b82f6",
  icon = null
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  // Observe when the counter is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Counting animation
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div
      ref={counterRef}
      className="relative rounded-2xl mx-4 my-4 p-4 shadow-lg border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        maxWidth: "260px",
        background: "linear-gradient(145deg, #1f2937, #111827)",
      }}
    >
      <div className="absolute top-3 right-3">
        {icon}
      </div>

      <div className="text-center">
        <div
          className="text-4xl font-bold mb-1 transition-all duration-300 ease-out"
          style={{
            color,
            transform: count === value ? "scale(1.1)" : "scale(1)",
            textShadow: count === value ? `0 0 12px ${color}80` : "none"
          }}
        >
          {prefix}{count}{suffix}
        </div>
        <div className="text-gray-300 text-sm">{title}</div>
      </div>

      <div className="mt-3 relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${(count / value) * 100}%`,
            backgroundColor: color,
            opacity: 0.8
          }}
        />
      </div>
    </div>
  );
};

// Demo Section
const CarRentalStats = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-10 px-4 rounded-2xl mx-4 my-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Our Car Rental Achievements</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Trusted by thousands of customers across multiple cities with unmatched service quality.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <Count 
          value={1200} 
          suffix="+" 
          title="Cars Rented" 
          color="#f59e0b"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#f59e0b">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l4-4h10l4 4M3 13v6a2 2 0 002 2h3m10-8v6a2 2 0 01-2 2h-3m-6 0h6" />
            </svg>
          }
        />

        <Count 
          value={98} 
          suffix="%" 
          title="Customer Satisfaction" 
          color="#10b981"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#10b981">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9l-3 3-2-2m9 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <Count 
          value={50} 
          suffix="+" 
          title="Cities Served" 
          color="#3b82f6"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#3b82f6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.895 2-2 2s-2-.896-2-2 .895-2 2-2 2 .896 2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20l-4-4M4 4l16 16" />
            </svg>
          }
        />

        <Count 
          value={24} 
          suffix="/7" 
          title="Support Hours" 
          color="#ef4444"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#ef4444">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default CarRentalStats;
