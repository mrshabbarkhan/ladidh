import { useState } from "react";
import {
  decTotalQty,
  incrTotalQty,
  removeCart,
  fetchAllCart,
} from "./cardSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function CartList({ id, img, qty = 1, title, price, pack, onQtyChange }) {
  const [tempQty, setTempQty] = useState(qty);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const newQty = tempQty + 1;
    setTempQty(newQty);
    dispatch(incrTotalQty());
    onQtyChange(id, newQty); // Notify CartPage of the updated quantity
  };

  const handleDecrease = () => {
    if (tempQty > 1) {
      const newQty = tempQty - 1;
      setTempQty(newQty);
      dispatch(decTotalQty());
      onQtyChange(id, newQty); // Notify CartPage of the updated quantity
    }
  };

  const handleDelete = async () => {
    try {
      const myPromise = dispatch(removeCart(id)).then(() =>
        dispatch(fetchAllCart())
      );

      await toast.promise(myPromise, {
        loading: "Removing Item...",
        success: "Cart removed Successfully",
        error: "Something went wrong",
      });

    } catch (error) {
      throw new Error("Unable to delete", error);
    }
  };

  return (
    <div className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg">
      <div className="grow flex flex-col justify-between">
        <div>
          <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-primary-dark font-semibold">
              &#x20B9; {price}
            </h1>
          </div>
          <p className="text-xs font-medium text-primary-dark">{pack}</p>
        </div>
        <div
          onClick={handleDelete}
          className="border shadow w-fit py-1 px-2 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
        >
          <i className="fa fa-trash-alt text-xl"></i>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img className="w-24 rounded-lg object-cover" src={img} alt={title} />
        <div className="flex justify-between">
          <button
            onClick={handleIncrease}
            className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition font-semibold"
          >
            +
          </button>
          <h1 className="font-semibold">{tempQty}</h1>
          <button
            onClick={handleDecrease}
            className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition font-semibold"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
