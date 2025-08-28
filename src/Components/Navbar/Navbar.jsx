import React, { useContext } from 'react';
import { FaCar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext) || {};
  const location = useLocation();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have successfully logged out.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonColor: '#d33',
        });
      });
  };

  const isActive = (path) => location.pathname === path;

  const publicLinks = (
    <>
      <Link
        to="/"
        className={`hover:text-orange-300 font-medium ${isActive('/') ? 'text-orange-500 font-bold' : ''}`}
      >
        Home
      </Link>
      <Link
        to="/available/cars"
        className={`hover:text-orange-300 font-medium ${isActive('/available-cars') ? 'text-orange-500 font-bold' : ''}`}
      >
        Available Cars
      </Link>
    </>
  );

  const privateLinks = (
    <>
      {publicLinks}
      <Link
        to="/add/car"
        className={`hover:text-orange-300 font-medium ${isActive('/addCar') ? 'text-orange-500 font-bold' : ''}`}
      >
        Add Car
      </Link>
      <Link
        to="/my/car"
        className={`hover:text-orange-300 font-medium ${isActive('/my-cars') ? 'text-orange-500 font-bold' : ''}`}
      >
        My Cars
      </Link>
      <Link
        to="/my/bookings"
        className={`hover:text-orange-300 font-medium ${isActive('/my-bookings') ? 'text-orange-500 font-bold' : ''}`}
      >
        My Bookings
      </Link>
      <Link
        to="/"
        onClick={handleLogout}
        className="hover:text-red-400 font-medium"
      >
        Logout
      </Link>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-900 to-slate-800 text-white px-4 rounded-2xl shadow-md">
      {/* Left - Logo & Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box mt-3 w-52 p-2 shadow text-white z-[1] flex flex-col gap-2"
          >
            {user ? privateLinks : publicLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl font-extrabold tracking-tight">
          <FaCar className="text-orange-500 text-2xl mr-1" />
          Drive<span className="text-orange-400">Easy</span>
        </Link>
      </div>

      {/* Center - Desktop / Tablet Menu */}
      <div className="navbar-center hidden md:flex">
        <div className="flex gap-6">
          {user ? privateLinks : publicLinks}
        </div>
      </div>

      {/* Right - Login / Profile */}
      <div className="navbar-end">
        {!user ? (
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            Log In
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-500"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
                {user.displayName?.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
