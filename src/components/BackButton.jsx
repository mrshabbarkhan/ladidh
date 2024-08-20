import { useNavigate } from "react-router-dom";

function BackButton({ children }) {
  const navigate = useNavigate();
  return (
    <button
      className="font-medium text-lg sticky top-10 z-10"
      onClick={() => navigate(-1)}
    >
      <i className="fa-solid fa-arrow-left mr-3"></i>
      {children}
    </button>
  );
}

export default BackButton;
