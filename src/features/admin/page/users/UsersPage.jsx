import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../redux/adminAuth/adminAuthSlice";



const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+123456789",
    address: "123 Main St, City, Country",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+987654321",
    address: "456 Elm St, City, Country",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+564738291",
    address: "789 Oak St, City, Country",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+859302145",
    address: "321 Pine St, City, Country",
  },
];

export default function UsersPage() {
  
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.adminAuth);

  useEffect(() =>{
    dispatch(allUsers())
  },[])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Customer List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users && users?.map((customer) => (
          <div
            key={customer.id}
            className="bg-white w-fit shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {customer.name}
            </h2>
            <p className="text-gray-600 ">
              <span className="font-medium">Email:</span> {customer.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {customer.number}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Address:</span> {customer.Addres}
            </p>
            <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-600 transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
