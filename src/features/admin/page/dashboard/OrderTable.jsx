import React from "react";
import { useSelector } from "react-redux";

const OrderTable = () => {
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);

  const orders = [
    {
      orderId: "12345",
      paymentMethod: "Credit Card",
      orderDate: "2024-08-25",
      deliveryDate: "2024-08-29",
      status: "Delivered",
      total: "$100.00",
    },
    {
      orderId: "67890",
      paymentMethod: "PayPal",
      orderDate: "2024-08-26",
      deliveryDate: "2024-08-30",
      status: "Pending",
      total: "$50.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Process",
      total: "$75.00",
    },
  ];

  const filterOrderById = orders.filter((order) =>
    order.orderId.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

   const statusColors = {
     Delivered: "bg-green-100 text-green-500 ",
     Pending: "bg-yellow-100 text-yellow-500",
     Process: "bg-blue-100 text-blue-500",
     Canceled: "bg-red-100 text-red-500", // Add more statuses and colors as needed
   };

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full table-auto border-collapse  ">
        <thead>
          <tr className="bg-red-100">
            <th className="px-4 py-2  ">OrderId</th>
            <th className="px-4 py-2  ">Payment Method</th>
            <th className="px-4 py-2  ">Order Date</th>
            <th className="px-4 py-2  ">Delivery Date</th>
            <th className="px-4 py-2  ">Status</th>
            <th className="px-4 py-2  ">Total</th>
          </tr>
        </thead>
        <tbody>
          {filterOrderById.map((order, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2  ">{order.orderId}</td>
              <td className="px-4 py-2  ">{order.paymentMethod}</td>
              <td className="px-4 py-2  ">{order.orderDate}</td>
              <td className="px-4 py-2  ">{order.deliveryDate}</td>
              <td className="px-4 py-2  ">
                <span
                  className={`inline-block px-3 py-1 rounded-lg text-white ${
                    statusColors[order.status] 
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2  ">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
