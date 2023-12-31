import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderPhoto from './Logo.jpeg'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const inputRef = useRef(null);

  const handleSearchBarClick = () => {
    inputRef.current.focus();
  };


  return (
    <header className="bg-[#c4e0ef] text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="text-blue-500">
            <img src={HeaderPhoto} alt="Header" className="w-14 h-12 backdrop-brightness-200	" />          </a>
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
          <div className="md:space-x-4">
            <button className="text-blue-500 md:ml-8 font-primary">
              My Account
            </button>
          </div>
          <a href="/logIn" className="text-blue-500">Login</a>
          <button className="text-blue-500">/  Sign In</button>
        </div>

        <div>
          <button className="text-black">
            <ShoppingCartOutlinedIcon />0
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
