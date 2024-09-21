import { useState } from "react";
import AddressForm from "./AddressForm";
import AddressSelector from "./AddressSelector";

function AddressLayout() {
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    };
    
     const addresses = [
       "123 Main St, Springfield",
       "456 Elm St, Shelbyville",
       "789 Oak St, Capital City",
       "101 Maple St, Ogdenville",
     ];

  return (
    <div>
      <AddressSelector addresses={addresses} />
    </div>
  );
}

export default AddressLayout;
