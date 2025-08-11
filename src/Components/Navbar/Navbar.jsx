import React from 'react';
import {FaCar } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r rounded-2xl from-gray-900 to-slate-800 text-white px-4 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Available Cars</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold tracking-tight">
      <FaCar className="text-orange-500 text-2xl" />
          
          Drive<span className="text-orange-400">Easy</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li><a className="hover:text-orange-300 font-medium">Home</a></li>
          <li><a className="hover:text-orange-300 font-medium">Available Cars</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-4 py-2 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition">Log In</a>
      </div>
    </div>
  );
};

export default Navbar;


