import { useState } from "react";

function AddressSelector({ addresses }) {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressChange = (e) => {
    setSelectedAddress(e.target.value); // Set the selected address
  };

  return (
    <div>
      <h1 className="font-medium">Your Address</h1>
      <form>
        {addresses.map((address, index) => (
          <div key={index} className="my-2">
            <input
              type="radio"
              id={`address-${index}`}
              name="address"
              value={address} // Assign address value
              checked={selectedAddress === address} // Check if the radio button is selected
              onChange={handleAddressChange} // Handle the change event
              className="mr-2"
            />
            <label htmlFor={`address-${index}`}>{address}</label>
          </div>
        ))}
      </form>
      <div className="mt-4">
        <p className="font-semibold">Selected Address:</p>
        {selectedAddress ? (
          <p>{selectedAddress}</p>
        ) : (
          <p>No address selected.</p>
        )}
      </div>
    </div>
  );
}

export default AddressSelector;
