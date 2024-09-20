import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchAllCart } from "../features/Cart/cardSlice";
import toast from "react-hot-toast";

function AddToButton({ redirect = "/cart", ...props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
const handleClick = async () => {
  const formData = {
    productId: props.id,
    quantity: 1,
  };
  try {
    const myPromise = dispatch(addToCart(formData))

    await toast.promise(myPromise, {
      loading: "Adding to cart...",
      success: "Product added to cart",
      error: "Something went wrong",
    });
    
    navigate(redirect);
  } catch (error) {
    console.error(error);
  } 
};

  return (
    <button
      onClick={handleClick}
      className="border border-primary-dark text-sm font-semibold px-3 py-1 rounded-lg hover:text-white hover:bg-primary-dark transition"
    >
      Add
    </button>
  );
}

export default AddToButton;
