import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <>
      {/* breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <Link to="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      {/* ./breadcrumb */}

      {/* wrapper */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* sidebar */}
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="/assets/images/avatar.png"
                alt="profile"
                className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 font-medium">John Doe</h4>
            </div>
          </div>

          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div className="space-y-1 pl-8">
              <Link to="/manage-account" className="block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-address-card"></i>
                </span>
                Manage account
              </Link>
              <Link to="/profile-information" className="relative hover:text-primary block capitalize transition">
                Profile information
              </Link>
              <Link to="/manage-addresses" className="relative hover:text-primary block capitalize transition">
                Manage addresses
              </Link>
              <Link to="/change-password" className="relative hover:text-primary block capitalize transition">
                Change password
              </Link>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <Link to="/order-history" className="relative hover:text-primary block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-box-archive"></i>
                </span>
                My order history
              </Link>
              <Link to="/returns" className="relative hover:text-primary block capitalize transition">
                My returns
              </Link>
              <Link to="/cancellations" className="relative hover:text-primary block capitalize transition">
                My Cancellations
              </Link>
              <Link to="/reviews" className="relative hover:text-primary block capitalize transition">
                My reviews
              </Link>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <Link to="/payment-methods" className="relative hover:text-primary block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-credit-card"></i>
                </span>
                Payment methods
              </Link>
              <Link to="/voucher" className="relative hover:text-primary block capitalize transition">
                Voucher
              </Link>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <Link to="/wishlist" className="relative text-primary block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-heart"></i>
                </span>
                My wishlist
              </Link>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <Link to="/logout" className="relative hover:text-primary block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                Logout
              </Link>
            </div>
          </div>
        </div>
        {/* ./sidebar */}

        {/* wishlist */}
        <div className="col-span-9 space-y-4">
          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img src="/assets/images/products/product6.jpg" alt="product 6" className="w-full" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <button className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
              Add to cart
            </button>
            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img src="/assets/images/products/product5.jpg" alt="product 5" className="w-full" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">Dining Table</h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <button className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
              Add to cart
            </button>
            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img src="/assets/images/products/product10.jpg" alt="product 10" className="w-full" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <button className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium">
              Add to cart
            </button>
            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        {/* ./wishlist */}
      </div>
      {/* ./wrapper */}
    </>
  );
};

export default Wishlist;
