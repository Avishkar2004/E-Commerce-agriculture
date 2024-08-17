import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../actions/authContext";
import HeaderPhoto from './Logo.jpeg';

const Header = () => {
  const inputRef = useRef(null);
  const { authenticatedUser, logout } = useAuth() || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogOut = () => {
    logout();
  };

  const fetchCartData = () => {
    axios.get("http://localhost:8080/cart").then(response => {
      setCartItemCount(response.data.length);
    });
  };

  const handleSearch = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(`http://localhost:8080/search?q=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };


  const ProfilehandleLogOut = async () => {
    try {
      await axios.post('http://localhost:8080/logout');
      logout(); // This will clear the state in your React app
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const renderUserDropdown = () => {
    return (
      <div className="relative inline-block text-left">
        <div
          className="flex items-center gap-2 cursor-pointer py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-gray-800 font-semibold">{authenticatedUser.username}</span>
          {isDropdownOpen ? (
            <KeyboardArrowUpIcon className="text-gray-600" />
          ) : (
            <KeyboardArrowDownIcon className="text-gray-600" />
          )}
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeDropdown}
            >
              Profile
            </Link>
            <button
              onClick={ProfilehandleLogOut}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  };


  return (
    <header className="bg-[#98def5] text-gray-800 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-blue-600">
            <img src={HeaderPhoto} alt="Header" className="w-16 h-12 rounded-md" />
          </Link>
        </div>
        <div className="w-full md:w-2/3 relative flex items-center">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              className="w-full px-5 py-2 pr-16 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <select className="ml-4 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          {authenticatedUser ? (
            renderUserDropdown()
          ) : (
            <>
              <Link to="/login" className="hover:underline text-gray-600">Login</Link>
              <Link to="/signup" className="hover:underline text-gray-600">Signup</Link>
            </>
          )}
          <Link to="/become-a-seller" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Become a Seller
          </Link>
        </div>
        <div>
          <Link to="/cart" className="text-gray-800 hover:cursor-pointer flex items-center">
            <ShoppingCartOutlinedIcon className="h-6 w-6" />
            <span className="ml-1">{cartItemCount}</span>
          </Link>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="container mx-auto mt-4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-xl mb-4">Search Results:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <div key={product.id} className="border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg mb-4">
                  <img
                    src={`data:image/jpeg;base64,${product.image}`}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-blue-600 font-bold">Price: ${product.salePrice}</p>
              </div>
            ))}
          </div>
        </div>


      )}
    </header>
  );
};

export default Header;
