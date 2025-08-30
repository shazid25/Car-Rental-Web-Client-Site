// import React from 'react';
// import { 
//   FaCar, 
//   FaPhone, 
//   FaEnvelope, 
//   FaClock, 
//   FaHeart, 
//   FaFacebook, 
//   FaTwitter, 
//   FaInstagram, 
//   FaLinkedin,
//   FaHome,
//   FaSearch,
//   FaPercent,
//   FaQuestionCircle
// } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="w-full rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           {/* About Column */}
//           <div>
//             <div className="flex items-center mb-4">
//               <FaCar className="text-orange-500 text-2xl" />
//               <h1 className="ml-2 text-2xl font-bold font-montserrat">
//                 Drive<span className="text-orange-500">Easy</span>
//               </h1>
//             </div>
//             <p className="text-gray-300 mb-4 leading-relaxed">
//               DriveEasy is a premium car rental service offering the best vehicles at competitive prices. We pride ourselves on exceptional customer service and well-maintained fleets.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
//                 <FaFacebook className="text-xl" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
//                 <FaTwitter className="text-xl" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
//                 <FaInstagram className="text-xl" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
//                 <FaLinkedin className="text-xl" />
//               </a>
//             </div>
//           </div>
          
//           {/* Quick Links Column */}
//           <div>
//             <h3 className="text-xl font-bold font-montserrat mb-6 pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-orange-500">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaHome className="text-orange-500 mr-3" /> Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaCar className="text-orange-500 mr-3" /> Available Cars
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaPercent className="text-orange-500 mr-3" /> Special Offers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaQuestionCircle className="text-orange-500 mr-3" /> FAQ
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaPhone className="text-orange-500 mr-3" /> Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Vehicle Types Column */}
//           <div>
//             <h3 className="text-xl font-bold font-montserrat mb-6 pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-orange-500">
//               Vehicle Types
//             </h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaCar className="text-orange-500 mr-3" /> Economy Cars
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaCar className="text-orange-500 mr-3" /> SUVs & Crossovers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaCar className="text-orange-500 mr-3" /> Minivans
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaCar className="text-orange-500 mr-3" /> Trucks
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaCar className="text-orange-500 mr-3" /> Luxury Vehicles
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Contact Column */}
//           <div>
//             <h3 className="text-xl font-bold font-montserrat mb-6 pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-orange-500">
//               Contact Us
//             </h3>
//             <ul className="space-y-4">
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-start">
//                   <FaCar className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
//                   123 Drive Street, Auto City
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+15551234567" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaPhone className="text-orange-500 mr-3" />
//                   +1 (555) 123-4567
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:info@driveeasy.com" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
//                   <FaEnvelope className="text-orange-500 mr-3" />
//                   info@driveeasy.com
//                 </a>
//               </li>
//               <li className="flex items-start">
//                 <FaClock className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
//                 <span className="text-gray-300">Mon-Sun: 8:00 AM - 10:00 PM</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Footer Bottom */}
//         <div className="pt-8 border-t border-gray-700">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} DriveEasy Car Rentals. All rights reserved.
//             </p>
//             <p className="text-gray-400 flex items-center">
//               Designed with <FaHeart className="text-orange-500 mx-1" /> for car enthusiasts
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { 
  FaCar, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaHeart, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaHome,
  FaSearch,
  FaPercent,
  FaQuestionCircle
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <FaCar className="text-orange-500 text-2xl" />
              <h1 className="ml-2 text-2xl font-bold font-montserrat">
                Drive<span className="text-orange-500">Easy</span>
              </h1>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              DriveEasy is a premium car rental service offering the best vehicles at competitive prices. We pride ourselves on exceptional customer service and well-maintained fleets.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/BillGates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://twitter.com/BillGates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://www.instagram.com/thisisbillgates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/williamhgates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6 pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaHome className="text-orange-500 mr-3" /> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaCar className="text-orange-500 mr-3" /> Available Cars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaPercent className="text-orange-500 mr-3" /> Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaQuestionCircle className="text-orange-500 mr-3" /> FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaPhone className="text-orange-500 mr-3" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Vehicle Types Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6 pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-orange-500">
              Vehicle Types
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaCar className="text-orange-500 mr-3" /> Economy Cars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaCar className="text-orange-500 mr-3" /> SUVs & Crossovers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaCar className="text-orange-500 mr-3" /> Minivans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaCar className="text-orange-500 mr-3" /> Trucks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaCar className="text-orange-500 mr-3" /> Luxury Vehicles
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6 pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-orange-500">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-start">
                  <FaCar className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  123 Drive Street, Auto City
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaPhone className="text-orange-500 mr-3" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@driveeasy.com" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                  <FaEnvelope className="text-orange-500 mr-3" />
                  info@driveeasy.com
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon-Sun: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DriveEasy Car Rentals. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Designed with <FaHeart className="text-orange-500 mx-1" /> for car enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
