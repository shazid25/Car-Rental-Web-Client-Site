import React, { useEffect } from "react";
import carLogo from './../../assets/carlogo.png';
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
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeSlideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll(".scroll-animate").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen rounded-2xl mx-3 my-3 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      {/* BMW M Series Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* BMW M Car Image */}
          <div className="absolute inset-0 animate-carDrive">
            <div className="w-full h-full bg-gradient-to-r from-black/70 to-black/20">
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                alt="BMW M Series" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating BMW Badge */}
          <div 
            className="absolute top-8 right-8 w-24 h-24 opacity-80 animate-float"
          >
            <img 
            className="w-full h-full object-contain"
             src={carLogo} alt="Car Logo"  
            />

          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 animate-fadeInDown">
              Drive Your <span className="text-white">Dreams</span> Today!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeInUp">
              Experience the pinnacle of automotive excellence with our premium BMW M Series fleet. 
              Feel the raw power, precision engineering, and unmatched luxury that only BMW M can deliver.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                Book Your Dream
              </button>
              <button className="border-2 border-yellow-500 text-yellow-400 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/20">
                Explore Our Fleet
              </button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-statsAppear">
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-gray-300">Premium Vehicles</div>
            </div>
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-300">Pickup Locations</div>
            </div>
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-yellow-400">100k+</div>
              <div className="text-gray-300">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-16 px-4 container mx-auto scroll-animate">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeSlideUpDelay1">
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
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeSlideUpDelay2">
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
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeSlideUpDelay3">
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
          <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeSlideUpDelay4">
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
      <section className="py-16 px-4 container mx-auto scroll-animate">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 rounded-xl p-1"
            >
              <div className="bg-gray-900 rounded-xl p-6 h-full hover:shadow-2xl transition-all duration-300">
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

      {/* Testimonials Section */}
      {/* <section className="py-16 px-4 container mx-auto scroll-animate">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-yellow-400 font-bold mr-4">JD</div>
              <div>
                <h4 className="font-bold">John Doe</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Renting the BMW M4 was an unforgettable experience. The power and handling were incredible. Will definitely rent again!"
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-yellow-400 font-bold mr-4">AS</div>
              <div>
                <h4 className="font-bold">Alex Smith</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The weekend rental discount made my trip affordable. The car was in perfect condition and the process was seamless."
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-yellow-400 font-bold mr-4">MJ</div>
              <div>
                <h4 className="font-bold">Maria Johnson</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The luxury car rental at $99/day was an incredible deal. I felt like a VIP the entire time. 5-star service!"
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 px-4 container mx-auto text-center scroll-animate">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Experience Luxury Driving?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Reserve your premium vehicle today and enjoy the journey of a lifetime.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
            Book Your Dream Car Now
          </button>
        </div>
      </section>

      <style jsx>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes carDrive {
          0% {
            transform: translateX(-10%) scale(1.1);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes statsAppear {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-carDrive {
          animation: carDrive 2s ease-out forwards;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
          animation-delay: 0.3s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animate-statsAppear {
          animation: statsAppear 1s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .scroll-animate.animate-fadeSlideUp {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Banner;