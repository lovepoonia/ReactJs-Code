import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-green-400">FoodZone</h1>
          <p className="mt-2 text-sm text-gray-300">
            Delivering happiness, one bite at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Explore</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/grocery" className="hover:underline">Grocery</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/offers" className="hover:underline">Offers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Support</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} FoodZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
