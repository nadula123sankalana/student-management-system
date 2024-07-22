// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mt-12 text-center text-white bg-blue-600 rounded-lg">
      <p className="mb-4">&copy; 2024 School Management System. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
