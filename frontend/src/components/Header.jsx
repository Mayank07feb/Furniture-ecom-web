import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* header */}

      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="assets/images/logo.svg"
              alt="Logo"
              className="w-28 md:w-32 lg:w-36"
            />
          </Link>

          {/* Search Bar */}
          <div className="relative flex items-center flex-grow max-w-xl">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary rounded-l-md pl-12 py-2 sm:py-2.5 pr-16 md:pr-20 focus:outline-none"
              placeholder="Search"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:hidden">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <button className="absolute right-0 top-0 bottom-0 bg-primary text-white px-4 py-2 rounded-r-md border border-primary hover:bg-transparent hover:text-primary transition md:hidden">
              Search
            </button>
            <button className="hidden md:flex bg-primary text-white px-4 py-2 rounded-r-md border border-primary hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <Link
              to="/wishlist"
              className="relative flex flex-col items-center text-gray-700 hover:text-primary transition"
            >
              <i className="fa-regular fa-heart text-2xl md:text-3xl mr-2"></i>{" "}
              {/* Added margin-right */}
              <span className="text-xs">Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className="relative flex flex-col items-center text-gray-700 hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping text-2xl md:text-3xl mr-2"></i>{" "}
              {/* Added margin-right */}
              <span className="text-xs">Cart</span>
            </Link>
            <Link
              to="/account"
              className="flex flex-col items-center text-gray-700 hover:text-primary transition"
            >
              <i className="fa-regular fa-user text-2xl md:text-3xl mr-2"></i>{" "}
              {/* Added margin-right */}
              <span className="text-xs">Account</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ./header */}

      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
            <span className="text-white">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="capitalize ml-2 text-white hidden">
              All Categories
            </span>

            {/* dropdown */}
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="assets/images/icons/sofa.svg"
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="assets/images/icons/terrace.svg"
                  alt="terrace"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Terrace</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="assets/images/icons/bed.svg"
                  alt="bed"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Bed</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="assets/images/icons/office.svg"
                  alt="office"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Office</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="assets/images/icons/outdoor-cafe.svg"
                  alt="outdoor"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="assets/images/icons/bed-2.svg"
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-gray-200 hover:text-white transition"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
            <Link
              to="/login"
              className="text-gray-200 hover:text-white transition flex items-center"
            >
              <img
                src="../assets/images/avatar.png"
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
