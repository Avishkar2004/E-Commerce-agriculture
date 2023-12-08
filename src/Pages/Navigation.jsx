import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const options = [
    "Fungicide",
    "Insecticide",
    "Micro-nutrient",
    "Plant Growth Regulator",
    "Water Soluble Fertilizer",
    "Organic Product",
    "Bactericides",
  ];

  return (
    <nav className="p-3 pl-4 ml-20">
      {/* Hamburger Icon (MenuIcon) */}
      <div className="md:hidden">
        {!isNavOpen ? (
          <button
            onClick={toggleNav}
            className="text-black font-secondary hover:text-blue-700 focus:outline-none"
          >
            <MenuIcon />
          </button>
        ) : (
          <button
            onClick={toggleNav}
            className="text-black font-secondary hover:text-blue-700 focus:outline-none"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:flex flex-wrap justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-8 font-primary`}
      >
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            Home
          </a>
        </li>
        <li>
          <select name="Display ">
            <option value="24 per page">Plant Protection</option>
            <option value="36 per page">Fungicides</option>
            <option value="48 per page">Insecticides</option>
            <option value="48 per page">Micro-nutrients</option>
            <option value="48 per page">Plant Growth Regulator (PGR)</option>
            <option value="48 per page">Water Soluble Fertilizers</option>
            <option value="48 per page">Organic Products</option>
            <option value="48 per page">Bactericides</option>
          </select>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            All Collections
          </a>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            Clearance Sale
          </a>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            Brands
          </a>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            All Reviews
          </a>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            Track Order
          </a>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            Videos
          </a>
        </li>
        <li>
          <a className="text-black font-secondary hover:text-blue-700" href="#">
            Blogs
          </a>
        </li>
      </ul>

      {/* Navigation Link to Toggle Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleNav}
          className={`text-black font-secondary hover:text-blue-700 focus:outline-none ${
            isNavOpen ? "hidden" : "block"
          }`}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
