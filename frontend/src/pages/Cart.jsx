import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
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
        <p className="text-gray-600 font-medium">Cart</p>
      </div>
      {/* ./breadcrumb */}

      {/* wrapper */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* cart items */}
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
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-primary">
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                className="w-12 text-center border-gray-300 rounded"
                value="1"
                readOnly
              />
              <button className="text-gray-500 hover:text-primary">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
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
            <div className="text-primary text-lg font-semibold">$150.00</div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-primary">
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                className="w-12 text-center border-gray-300 rounded"
                value="2"
                readOnly
              />
              <button className="text-gray-500 hover:text-primary">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
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
            <div className="text-primary text-lg font-semibold">$420.00</div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-primary">
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                className="w-12 text-center border-gray-300 rounded"
                value="0"
                readOnly
              />
              <button className="text-gray-500 hover:text-primary">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        {/* ./cart items */}

        {/* order summary */}
        <div className="col-span-3">
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">Order Summary</h4>
            <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
              <div className="flex justify-between font-medium">
                <p>Subtotal</p>
                <p>$890.00</p>
              </div>
              <div className="flex justify-between font-medium">
                <p>Shipping</p>
                <p>$40.00</p>
              </div>
            </div>
            <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
              <h4>Total</h4>
              <h4>$930.00</h4>
            </div>
            <Link to="/checkout" className="bg-primary border border-primary text-white px-4 py-2 rounded hover:bg-transparent hover:text-primary transition uppercase font-medium block text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
        {/* ./order summary */}
      </div>
      {/* ./wrapper */}
    </>
  );
};

export default Cart;
