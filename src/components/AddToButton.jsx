import { useNavigate } from "react-router-dom";
import { addToProductDetails } from "../features/Product-list/productDetailSlice";
import { useDispatch } from "react-redux";

function AddToButton({ redirect = "/cart", ...props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClick = () => {
    // dispatch(addToProductDetails(props));
    navigate(redirect);
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
