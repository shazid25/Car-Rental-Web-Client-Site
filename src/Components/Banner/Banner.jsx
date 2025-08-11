import React from "react";

const specialOffers = [
  {
    id: 1,
    title: "15% off for weekend rentals!",
    description: "Enjoy a special discount when you book cars for the weekend.",
    button: "Learn More",
  },
  {
    id: 2,
    title: "Luxury cars at $99/day this holiday season!",
    description: "Drive in style without breaking the bank.",
    button: "Book Now",
  },
  {
    id: 3,
    title: "Free GPS with every booking above 3 days!",
    description: "Navigate easily with complimentary GPS rental.",
    button: "Get Offer",
  },
];

const Banner = () => {
  return (
    <div className="min-h-screen mx-4 my-4 rounded-2xl bg-gradient-to-b from-gray-400 via-gray-800 to-gray-900 text-gray-100">
      {/* --- Why Choose Us --- */}
      <section
        className="py-16 px-4 container mx-auto"
        style={{ animation: "fadeSlideUp 0.8s ease forwards", opacity: 0 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-fadeSlideUpDelay1">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Variety</h3>
            <p className="text-gray-300">
              From budget-friendly options to luxury vehicles
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-fadeSlideUpDelay2">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-300">Competitive daily rates you can count on</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-fadeSlideUpDelay3">
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-300">Seamlessly book your ride in just a few clicks</p>
          </div>

          {/* Feature 4 */}
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-fadeSlideUpDelay4">
            <div className="w-16 h-16 bg-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-300">Always available assistance for all your queries</p>
          </div>
        </div>
      </section>

      {/* --- Special Offers --- */}
      <section
        className="py-16 px-4 container mx-auto"
        style={{ animation: "fadeSlideUp 0.8s ease forwards", opacity: 0 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 rounded-xl p-1 animate-fadeSlideUpDelay"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="bg-gray-900 rounded-xl p-6 h-full hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-300 mb-4">{offer.description}</p>
                <button className="mt-4 bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105">
                  {offer.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlideUpDelay1 {
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.1s;
          opacity: 0;
        }
        .animate-fadeSlideUpDelay2 {
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-fadeSlideUpDelay3 {
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .animate-fadeSlideUpDelay4 {
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.7s;
          opacity: 0;
        }
        .animate-fadeSlideUpDelay {
          animation-fill-mode: forwards;
          animation-name: fadeSlideUp;
          animation-duration: 0.6s;
          animation-timing-function: ease;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Banner;
