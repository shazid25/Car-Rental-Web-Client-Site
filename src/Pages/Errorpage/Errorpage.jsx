import React from 'react';
import { FaCarSide, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6">
      {/* Animated Car */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <FaCarSide className="text-6xl text-orange-500" />
      </motion.div>

      {/* 404 Text */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-9xl font-bold text-gray-800">4</h1>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaExclamationTriangle className="text-8xl text-orange-500 mx-4" />
          </motion.div>
          <h1 className="text-9xl font-bold text-gray-800">4</h1>
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
      </motion.div>

      {/* Error Message */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg text-gray-600 mb-8 text-center max-w-md"
      >
        Oops! The page you're looking for seems to have taken a wrong turn. Maybe
        it's out for a test drive?
      </motion.p>

      {/* Back Home Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 300 }}
      >
        <Link
          to="/"
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
        >
          <FaCarSide className="mr-2" />
          Back to Home
        </Link>
      </motion.div>

      {/* Road Animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 1.2, duration: 1 }}
        className="h-2 bg-gray-300 rounded-full mt-12 max-w-md relative overflow-hidden"
      >
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          className="absolute top-0 left-0 h-full w-1/3 bg-orange-500"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Errorpage;