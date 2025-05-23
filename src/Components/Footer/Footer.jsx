import React from 'react';
import { Link } from 'react-router'; // ✅ corrected import

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700 mt-10 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-orange-500">MeetMyRoomie</h1>
          <p className="mt-2 text-sm">
            Helping you find the perfect roommate and shared space — safely, easily, and quickly.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/browse" className="hover:underline">Browse Listings</Link></li>
            <li><Link to="/add-roommate" className="hover:underline">Add Roommate</Link></li>
            <li><Link to="/my-listings" className="hover:underline">My Listings</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-2">Legal</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-2">Contact</h2>
          <p className="text-sm">Email: support@meetmyroomie.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm mb-4 mt-2">Location: Dhaka, Bangladesh</p>
          <div className="flex gap-4 text-orange-500 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-orange-100 text-sm bg-orange-100 text-gray-600">
        &copy; {new Date().getFullYear()} MeetMyRoomie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
