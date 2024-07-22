import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              School Management System
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-yellow-400 focus:outline-none focus:text-yellow-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-6">
            <NavItem to="/" text="Home" />
            <NavItem to="/students" text="Students" />
            <NavItem to="/courses" text="Courses" />
            <NavItem to="/teachers" text="Teachers" />
            <NavItem to="/admin" text="Admin" />
            <NavItem to="/dashboard" text="Dashboard" />
            <NavItem to="/profile" text="Profile" />
            <NavItem to="/add-course" text="Add Course" />
            {/* Signup and Login Buttons */}
            <NavButton to="/signup" text="Signup" />
            <NavButton to="/login" text="Login" />
          </ul>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-4">
              <MobileNavItem to="/" text="Home" />
              <MobileNavItem to="/students" text="Students" />
              <MobileNavItem to="/courses" text="Courses" />
              <MobileNavItem to="/teachers" text="Teachers" />
              <MobileNavItem to="/admin" text="Admin" />
              <MobileNavItem to="/dashboard" text="Dashboard" />
              <MobileNavItem to="/profile" text="Profile" />
              <MobileNavItem to="/add-course" text="Add Course" />
              <MobileNavItem to="/signup" text="Signup" />
              <MobileNavItem to="/login" text="Login" />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

// NavItem Component for Desktop Menu
const NavItem = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="text-white transition duration-300 hover:text-yellow-400"
    >
      {text}
    </Link>
  </li>
);

// NavButton Component for Signup and Login Buttons (Desktop)
const NavButton = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="px-4 py-2 text-white transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600"
    >
      {text}
    </Link>
  </li>
);

// MobileNavItem Component for Mobile Menu
const MobileNavItem = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="block px-4 py-2 text-white transition duration-300 hover:bg-gray-800"
    >
      {text}
    </Link>
  </li>
);

export default Navbar;
