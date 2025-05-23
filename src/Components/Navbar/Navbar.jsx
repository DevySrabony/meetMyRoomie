import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase.init';
import './navbar.css'
import ThemeToggle from '../ThemeContext/ThemeToggle';
const Navbar = () => {
  const { user } = useContext(AuthContext);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = ( 
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/add-roommate"
      className={({ isActive }) =>
        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
      }
    >
      Add to Find Roommate
    </NavLink>
    <NavLink
      to="/browse"
      className={({ isActive }) =>
        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
      }
    >
      Browse Listing
    </NavLink>
    <NavLink
      to="/my-listings"
      className={({ isActive }) =>
        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
      }
    >
      My Listings
    </NavLink>
  </>
);
return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 md:px-24 py-5 sticky top-0 z-50 nav-font">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          MeetMyRoomie
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks}
        </div>
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1 text-sm border border-orange-400 text-orange-500 rounded hover:bg-orange-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <div className="relative group">
              <img
                src={user.photoURL || 'https://i.ibb.co/2kR0fLN/default-user.png'}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-orange-400 cursor-pointer"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300 p-3 z-50">
                <p className="text-sm font-semibold text-gray-700">{user.displayName || 'User'}</p>
                <button
                  onClick={handleLogout}
                  className="mt-2 text-sm w-full text-left text-red-500 hover:underline"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
          <div>
        <ThemeToggle></ThemeToggle>
      </div>
        </div>
        
      </div>
      <div className="md:hidden mt-3 space-y-2 text-sm space-x-3 font-medium text-gray-700">
        {navLinks}
      </div>
      
    </nav>
  );
};

export default Navbar;



