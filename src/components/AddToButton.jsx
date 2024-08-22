import { useNavigate } from "react-router-dom";

function AddToButton({ redirect="/cart" }) {
    const navigate = useNavigate()
    return (
      <button onClick={()=>navigate(redirect)} className="border border-primary-dark text-sm font-semibold px-3 py-1 rounded-lg hover:text-white hover:bg-primary-dark transition">
        Add
      </button>
    );
}

export default AddToButton
