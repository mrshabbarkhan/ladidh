import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct, allProducts } from "../../redux/adminAuth/adminActionSlice";

export default function AddProductPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    pack: "single pack",
    title: "",
    code: "",
    price: "",
    discount: "",
    category: "Fish & Seafood",
    quantity: "",
    description: "",
  });

  const handleImages = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("img", image);
    data.append("pack", formData.pack);
    data.append("title", formData.title);
    data.append("code", formData.code);
    data.append("price", formData.price);
    data.append("discount", formData.discount);
    data.append("category", formData.category);
    data.append("quantity", formData.quantity);
    data.append("description", formData.description);

    dispatch(addNewProduct(data));
    togglePopup();
    
    dispatch(allProducts())
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
                    id="img"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    accept="image/*"
                    onChange={handleImages}
                    required
                  />
                </div>

                {/* Product Name */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Product Name
                  </label>
                  <input
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
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
                    id="pack"
                    value={formData.pack}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  >
                    <option value="single pack">Single pack</option>
                    <option value="combo pack">Combo pack</option>
                  </select>
                </div>

                {/* Discount Field */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Discount (%)
                  </label>
                  <input
                    id="discount"
                    type="number"
                    value={formData.discount}
                    onChange={handleChange}
                    placeholder="Discount in percent"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    min="0"
                    max="100"
                  />
                </div>

                {/* Coupon Code Field (Conditional) */}
                {/* {formData.discount > 0 && ( */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Coupon Code
                  </label>
                  <input
                    id="code"
                    value={formData.code}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                {/* )} */}

                {/* Price */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
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
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
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
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  >
                    <option value="Fish & Seafood">Fish & Seafood</option>
                    <option value="Mutton - Goat">Mutton - Goat</option>
                    <option value="Ready to Cook">Ready to Cook</option>
                    <option value="Steaks & Fillets">Steaks & Fillets</option>
                    <option value="Poultry">Poultry</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
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
                    onClick={handleSubmit}
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
