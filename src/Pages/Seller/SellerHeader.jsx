import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from "../Logo.webp"
import { Link } from 'react-router-dom';

const SellerHeader = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
          <img src={Logo} alt="Header" className="w-16 h-auto rounded-md" />
        </Link>
        {/* Navigation Items */}
        <nav className="flex items-center flex-grow">
          <div className="flex space-x-6">
            {/* Sell Online Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-indigo-600 font-semibold focus:outline-none">
                Sell Online
                <ArrowDropDownIcon className="ml-1" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/create-account" className="block text-gray-800">Create Account</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/list-products" className="block text-gray-800">List Products</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/storage-shipping" className="block text-gray-800">Storage & Shipping</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/receive-payments" className="block text-gray-800">Receive Payments</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/grow-faster" className="block text-gray-800">Grow Faster</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/seller-app" className="block text-gray-800">Seller App</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/help-support" className="block text-gray-800">Help & Support</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fees and Commission Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-indigo-600 font-semibold focus:outline-none">
                Fees and Commission
                <ArrowDropDownIcon className="ml-1" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/payment-cycle" className="block text-gray-800">Payment Cycle</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/fee-type" className="block text-gray-800">Fee Type</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/calculate-gross-margin" className="block text-gray-800">Calculate Gross Margin</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Grow Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-indigo-600 font-semibold focus:outline-none">
                Grow
                <ArrowDropDownIcon className="ml-1" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/assured-badge" className="block text-gray-800">Assured Badge</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/insights-tools" className="block text-gray-800">Insights & Tools</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/flipkart-ads" className="block text-gray-800">Flipkart Ads</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/flipkart-value-services" className="block text-gray-800">Flipkart Value Services</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/shopping-festivals" className="block text-gray-800">Shopping Festivals</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/service-partners" className="block text-gray-800">Service Partners</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Learn Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-indigo-600 font-semibold focus:outline-none">
                Learn
                <ArrowDropDownIcon className="ml-1" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/faqs" className="block text-gray-800">FAQs</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/seller-success-stories" className="block text-gray-800">Seller Success Stories</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/seller-blogs" className="block text-gray-800">Seller Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Links */}
            <a href="/" className="text-gray-800 hover:text-indigo-600 font-semibold focus:outline-none">Shopsy</a>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4 ml-auto">
            <Link to="/login" className="text-gray-800 hover:text-indigo-600 font-semibold">Login</Link>
            <Link to="/start-selling" className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Start Selling
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SellerHeader;
