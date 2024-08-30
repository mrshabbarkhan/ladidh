import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <nav className="author-box h-screen w-52 bg-gray-200">
      <ul className="flex flex-col  gap-4 text-left pl-5 pt-5 text-lg text-white">
        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-red-500 w-full px-2 py-1 rounded-l-lg flex items-center text-white"
                : "text-gray-600"
            }`
          }
        >
          <i className="fa-solid fa-gauge mr-2 "></i>
          <span>Deshboard</span>
        </NavLink>

        <NavLink
          to={"/admin/products"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-red-500 w-full px-2 py-1 rounded-l-lg flex items-center text-white"
                : "text-gray-600"
            }`
          }
        >
          <i className="fa-brands fa-product-hunt mr-2"></i>
          <span>Products</span>
        </NavLink>

        <NavLink
          to={"/admin/category"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-red-500 w-full px-2 py-1 rounded-l-lg flex items-center text-white"
                : "text-gray-600"
            }`
          }
        >
          <span>
            <i className="fa-solid fa-list mr-2"></i>Categories
          </span>
        </NavLink>
        <NavLink
          to={"/admin/users"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-red-500 w-full px-2 py-1 rounded-l-lg flex items-center text-white"
                : "text-gray-600"
            }`
          }
        >
          <span>
            <i className="fa-solid fa-people-group mr-2"></i>Users
          </span>
        </NavLink>
        <li>
          <span></span>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
