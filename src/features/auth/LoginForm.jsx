import React, { useState } from "react";

const LoginForm = ({ setRegister }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
        >
          Login
        </button>
      </form>

      {/* Toggle between forms */}
      <p
        onClick={() => setRegister(true)}
        className="hover:underline mt-6 text-center text-sm text-gray-600"
      >
        Don't have an account?
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition"
        >
          sign up
        </button>
      </p>
    </>
  );
};

export default LoginForm;
