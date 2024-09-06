import { useNavigate } from "react-router-dom";

function Categories({ img, tittle, redirect }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => navigate(redirect)}
    >
      <img className="" src={img} alt={img} />
      <p className="font-semibold">{tittle}</p>
    </div>
  );
}

export default Categories;
