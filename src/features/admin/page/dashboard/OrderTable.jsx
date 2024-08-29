import React from "react";

const OrderTable = () => {
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
      status: "Processing",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Processing",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Processing",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Processing",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Processing",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Processing",
      total: "$75.00",
    },
    {
      orderId: "54321",
      paymentMethod: "Debit Card",
      orderDate: "2024-08-27",
      deliveryDate: "2024-09-01",
      status: "Processing",
      total: "$75.00",
    },
  ];

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
          {orders.map((order, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2  ">
                {order.orderId}
              </td>
              <td className="px-4 py-2  ">
                {order.paymentMethod}
              </td>
              <td className="px-4 py-2  ">
                {order.orderDate}
              </td>
              <td className="px-4 py-2  ">
                {order.deliveryDate}
              </td>
              <td className="px-4 py-2  ">
                {order.status}
              </td>
              <td className="px-4 py-2  ">
                {order.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
