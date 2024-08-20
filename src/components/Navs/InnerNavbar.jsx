import { useLocation } from "react-router-dom";
import BackButton from "../BackButton";
import ShoppingCart from "../ShoppingCart";

function InnerNavbar({ children }) {
  const location = useLocation();
  const pathName4 = location.pathname === "/profile" && "Profile";

  return (
    <nav className="flex justify-between w-full py-4 px-2 pr-4 md:px-24 lg:px-48 border-b fixed left-0 top-0 z-10 bg-white">
      <BackButton>{children}</BackButton>
      <div>{pathName4 && <ShoppingCart />}</div>
    </nav>
  );
}

export default InnerNavbar;
