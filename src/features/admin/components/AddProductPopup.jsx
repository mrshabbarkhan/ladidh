import React, { useState } from "react";

export default function AddProductPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState(""); // For conditionally rendering coupon code

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    togglePopup(); // Close the popup on submit
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add Product
      </button>

      {isOpen && (
        <div>
          {/* Overlay */}
          <div
            onClick={togglePopup}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          />

          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-50 ">

            <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg max-h-80 overflow-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Add New Product
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Image Upload */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    accept="image/*"
                    required
                  />
                </div>

                {/* Product Name */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Pack Type Dropdown */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Pack Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  >
                    <option value="single">Single</option>
                    <option value="combo">Combo</option>
                  </select>
                </div>

                {/* Discount Field */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    min="0"
                    max="100"
                  />
                </div>

                {/* Coupon Code Field (Conditional) */}
                {discount > 0 && (
                  <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-1">
                      Coupon Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>
                )}

                {/* Price */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Product Description */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Product Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    rows="3"
                  />
                </div>

                {/* Category Dropdown */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Category
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    min="1"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
