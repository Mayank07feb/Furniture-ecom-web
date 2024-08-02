import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 space-y-4">
              <img src="assets/images/logo.svg" alt="logo" className="w-30" />
              <div className="mr-2">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                </p>
              </div>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-github-square"></i>
                </a>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                <div className="mt-4 space-y-4">
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Analytics</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                <div className="mt-4 space-y-4">
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</Link>
                  {/* <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</Link> */}
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                <div className="mt-4 space-y-4">
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Analytics</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                <div className="mt-4 space-y-4">
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</Link>
                  {/* <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</Link> */}
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</Link>
                  <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ./footer */}

      {/* copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-white text-center sm:text-left mb-4 sm:mb-0">&copy; TailCommerce - All Right Reserved</p>
          <div>
            <img src="assets/images/methods.png" alt="methods" className="h-5" />
          </div>
        </div>
      </div>
      {/* ./copyright */}
    </div>
  );
};

export default Footer;