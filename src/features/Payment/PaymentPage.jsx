import React, { useState } from "react";
import Accordion from "./Accordion";
// import CreditDebit from "./components/CreditDebit";
// import GooglePay from "./components/GooglePay";
// import Netbanking from "./components/Netbanking";
// import Wallet from "./components/Wallet";

function PaymentPage() {
  const [selectedAccordion, setSelectedAccordion] = useState(null); // State to track selected accordion

  const data = [
    {
      id: 1,
      title: "Cash on Delivery",
      // content: "Carry on your cash payment... Thanx!",
      icon: "fa-solid fa-money-bill me-2",
    },
    // {
    //   id: 2,
    //   title: "Credit/Debit Card",
    //   element: <CreditDebit />,
    //   icon: "fa-solid fa-credit-card me-2",
    // },
    // {
    //   id: 3,
    //   title: "Google Pay/Other",
    //   element: <GooglePay />,
    //   icon: "fa-solid fa-money-check me-2",
    // },
    // {
    //   id: 4,
    //   title: "Netbanking",
    //   element: <Netbanking />,
    //   icon: "fa-solid fa-building-columns me-2",
    // },
    // {
    //   id: 5,
    //   title: "Wallet",
    //   element: <Wallet />,
    //   icon: "fa-solid fa-wallet me-2",
    // },
  ];

  const handleSelectAccordion = (id) => {
    setSelectedAccordion(id); // Set the selected accordion by id
  };

  return (
    <div>
      <h1 className="font-semibold text-lg">Select Payment Mode</h1>
      <div>
        {data.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            content={item.content}
            icon={item.icon}
            element={item.element}
            isSelected={selectedAccordion === item.id} // Check if this accordion is selected
            onSelect={() => handleSelectAccordion(item.id)} // Set as selected when clicked
          />
        ))}
      </div>
      <div className="w-full bg-white text-center z-30 px-2 py-3 fixed bottom-0 left-0">
        <div className="z-30 bg-primary text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white">
          Continue
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
