import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../actions/authContext";
import HeaderPhoto from './Logo.jpeg';

const Header = () => {
  const inputRef = useRef(null);
  const { authenticatedUser, logout } = useAuth() || {};
  const [isDrodownOpne, setisDrodownOpne] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)
  const handleSearchBarClick = () => {
    inputRef.current.focus();
  };

  const toggleDropdown = () => {
    setisDrodownOpne(!isDrodownOpne)
  }

  const closeDropdown = () => {
    setisDrodownOpne(false)
  }

  const handleLogOut = () => {
    logout()
  }

  const fetchCartData = () => {
    axios.get("http://localhost:8080/cart").then(response => {
      setCartItemCount(response.data.length);
    });
  };

  useEffect(() => {
    //fetch cart data  from backend when component mounts
    fetchCartData()
  }, [])

  const renderUserDropdown = () => {
    return (
      <div className="relative inline-block text-left">
        <button onClick={toggleDropdown} className="text-gray-600 focus:outline-none">{authenticatedUser.username}</button>
        {isDrodownOpne && (
          <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                Profile
              </Link>
              <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogOut}>
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };


  return (
    <header className="bg-[#c4e0ef] text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-blue-500">
            <img src={HeaderPhoto} alt="Header" className="w-14 h-12 backdrop-brightness-200	" />          </Link>
        </div>
        <div
          className="w-full md:w-2/3 relative"
          onClick={handleSearchBarClick}
        >
          <div className="absolute inset-y-0 left-0 flex items-center px-2 cursor-text text-gray-700">
            <span className="h-5 lg:border-black lg:border-l lg:ml-[42rem]"></span>
            <select
              className="pl-6 w-full py-2 px-2 mr-[-23rem]"
              defaultValue="all"
            >
              <option value="all" className="font-primary">
                All Categories
              </option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <SearchIcon className="h-10 w-full text-black absolute mt-2.5 left-3 lg:ml-[52rem]" />
          {/* Search */}
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              className="w-full px-5 py-2 text-black ml-12"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="md:space-x-4">
          {authenticatedUser ? (
            renderUserDropdown()
          ) : (
            // If user is not authenticated, display login and signup buttons
            <>
              <Link to="/login" className="hover:underline text-gray-600">Login</Link>
              <Link to="/signup" className="hover:underline text-gray-600">Signup</Link>
            </>
          )}

        </div>
        <div>
          <Link to="/cart" className="text-black hover:cursor-pointer">
            <ShoppingCartOutlinedIcon />
            <span className="ml-1">{cartItemCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
