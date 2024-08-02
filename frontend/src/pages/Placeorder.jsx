import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [newAddress, setNewAddress] = useState({ type: '', address: '' });

  const user = {
    name: "Mayank Sharma",
    phone: "+917905111789"
  };

  const [addresses, setAddresses] = useState([
    {
      type: "HOME",
      address: "29 A Block D Phase 1, Block D, Phase 1, Qutub Vihar, New Delhi, Delhi - 110071"
    },
    {
      type: "HOME",
      address: "144/4 Vijay Nagar Near Sita Ram Mandir, First Street, Vijay Nagar, Armapur Estate, Kanpur Nagar, Uttar Pradesh - 208005"
    },
    {
      type: "WORK",
      address: "Tirubala International Pvt Ltd C-35/36, Cazi Ing Private Limited, Panki Industrial Area Site 1, Panki, Kanpur, Uttar Pradesh - 208022"
    }
  ]);

  const priceDetails = {
    price: 14999,
    deliveryCharges: 0,
    packagingCharge: 59,
    totalPayable: 15058,
    totalSavings: 5943
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const handleAddAddress = () => {
    if (newAddress.type && newAddress.address) {
      setAddresses([...addresses, newAddress]);
      setNewAddress({ type: '', address: '' });
      setOpenAccordionIndex(null);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="text-blue-600 text-base hover:underline">
            <i className="fa-solid fa-house"></i>
          </Link>
          <span className="text-sm text-gray-400">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p className="text-gray-600 font-medium">Place Order</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full md:w-8/12 space-y-6">
            {/* Login Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">1. LOGIN <span className="text-green-500">✓</span></h2>
                  <p className="text-sm text-gray-600">{user.name} | {user.phone}</p>
                </div>
                <button className="text-blue-500 font-medium hover:underline">CHANGE</button>
              </div>
            </div>

            {/* Delivery Address Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">2. DELIVERY ADDRESS</h2>
              {addresses.map((addr, index) => (
                <div key={index} className="mb-4 p-4 rounded-lg border border-gray-300 hover:bg-blue-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{user.name} <span className="text-gray-500 text-sm">{addr.type}</span></p>
                      <p className="text-sm text-gray-600">{addr.address}</p>
                      <p className="text-sm text-gray-600">{user.phone}</p>
                    </div>
                    <input 
                      type="radio" 
                      name="address" 
                      checked={selectedAddress === index}
                      onChange={() => setSelectedAddress(index)}
                      className="mt-1"
                    />
                  </div>
                  {selectedAddress === index && (
                    <button className="mt-2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600">
                      DELIVER HERE
                    </button>
                  )}
                </div>
              ))}

              {/* Accordion for Adding a New Address */}
              <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 mt-4">
                <div 
                  className="cursor-pointer flex justify-between items-center" 
                  onClick={() => toggleAccordion(-1)}
                >
                  <h2 className="text-lg font-semibold text-gray-800">+ Add a new address</h2>
                  <i className={`fa-solid fa-chevron-${openAccordionIndex === -1 ? 'up' : 'down'} text-gray-600`}></i>
                </div>
                <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openAccordionIndex === -1 ? 'max-h-screen' : 'max-h-0'}`}>
                  {openAccordionIndex === -1 && (
                    <div className="mt-4">
                      <div className="flex flex-col space-y-4">
                        <input 
                          type="text" 
                          placeholder="Address Type (e.g., HOME, WORK)" 
                          value={newAddress.type}
                          onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea 
                          placeholder="Address Details" 
                          value={newAddress.address}
                          onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                          className="p-3 border border-gray-300 rounded-lg shadow-sm h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                          onClick={handleAddAddress}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                          Add Address
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">3. ORDER SUMMARY</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-800 font-medium">
                  <span>Items Total (3 items)</span>
                  <span>₹{priceDetails.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges</span>
                  <span className="text-green-500">₹{priceDetails.deliveryCharges} FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Packaging Charge</span>
                  <span>₹{priceDetails.packagingCharge}</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-800 border-t border-gray-200 pt-3 mt-3">
                  <span>Total Payable</span>
                  <span>₹{priceDetails.totalPayable}</span>
                </div>
              </div>
            </div>

            {/* Payment Options Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">4. PAYMENT OPTIONS</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="radio" name="payment" id="creditCard" className="mr-2" />
                  <label htmlFor="creditCard" className="text-sm text-gray-800">Credit/Debit Card</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="payment" id="paypal" className="mr-2" />
                  <label htmlFor="paypal" className="text-sm text-gray-800">PayPal</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="payment" id="cod" className="mr-2" />
                  <label htmlFor="cod" className="text-sm text-gray-800">Cash on Delivery</label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-4/12">
            {/* Price Details */}
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 sticky top-4">
              <h3 className="text-base font-semibold mb-4 text-gray-700">PRICE DETAILS</h3>
              <div className="space-y-3 text-sm text-gray-800">
                <div className="flex justify-between">
                  <span>Price (3 items)</span>
                  <span>₹{priceDetails.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-500">₹{priceDetails.deliveryCharges} FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Packaging Charge</span>
                  <span>₹{priceDetails.packagingCharge}</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-800 border-t border-gray-200 pt-3 mt-3">
                  <span>Total Payable</span>
                  <span>₹{priceDetails.totalPayable}</span>
                </div>
              </div>
              <p className="text-green-500 font-medium text-sm mt-4">Your Total Savings on this order ₹{priceDetails.totalSavings}</p>
            </div>


            {/* Payment Assurance */}
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
