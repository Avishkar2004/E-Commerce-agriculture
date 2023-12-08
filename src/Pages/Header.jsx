import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const inputRef = useRef(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSearchBarClick = () => {
    inputRef.current.focus();
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageMenuOpen(false);
  };

  return (
    <header className="bg-[#c4e0ef] text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="text-blue-500">
            YourLogo
          </a>
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

        {/* Language Menu */}
        <div className="relative group">
          <button
            className="text-blue-600 font-primary"
            onClick={toggleLanguageMenu}
          >
            Language
          </button>
          {languageMenuOpen && (
            <ul className="absolute z-10 mt-2 space-y-2 bg-white border text-black rounded shadow-md">
              <li>
                <button
                  className="px-2 py-2 z-10 hover:bg-gray-100"
                  onClick={() => selectLanguage("English")}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => selectLanguage("Hindi")}
                >
                  Hindi
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Selected Language */}
        {selectedLanguage && (
          <div className="ml-[-6rem] mt-10 text-black">{selectedLanguage}</div>
        )}

        <div className="md:space-x-4">
          <div className="md:space-x-4">
            <button className="text-blue-500 md:ml-8 font-primary">
              My Account
            </button>
          </div>
          <button className="text-blue-500">Login / Signup</button>
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
