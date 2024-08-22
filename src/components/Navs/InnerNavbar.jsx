import { useLocation } from "react-router-dom";
import BackButton from "../BackButton";
import ShoppingCart from "../ShoppingCart";

function InnerNavbar({ children }) {
  const location = useLocation();
  const pathName4 = location.pathname === "/profile" && "Profile";
  const pathName5 = location.pathname === '/product-details'

  return (
    <nav
      className={`flex justify-between w-full py-4 px-2 pr-4 md:px-24 lg:px-48 fixed left-0 top-0 z-30 ${
        pathName5 ? "" : "opacity-100 bg-white border-b"
      }`}
    >
      {pathName5 ? (
        <div className="flex justify-between items-center w-full">
          <div className="font-bold w-fit border-2 bg-black/30  text-center py-1 px-1.5 rounded-full text-white border-none flex justify-between">
            <BackButton>{children}</BackButton>
          </div>
          <i className="fa-regular fa-heart text-white bg-black/30  px-1.5 rounded-full text-lg"></i>
        </div>
      ) : (
        <BackButton>{children}</BackButton>
      )}
      <div>{pathName4 && <ShoppingCart />}</div>
    </nav>
  );
}

export default InnerNavbar;
