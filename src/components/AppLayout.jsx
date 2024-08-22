import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "./Navs/Navbar";
import InnerNavbar from "./Navs/InnerNavbar";
import NavigationBar from "./Navs/NavigationBar";
import SideBar from "./Navs/SideBar";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pathName1 = location.pathname === "/category" && "Categories";
  const pathName2 = location.pathname === "/favorites" && "Favorite";
  const pathName3 = location.pathname === "/cart" && "Cart";
  const pathName4 = location.pathname === "/profile" && "Profile";
  const pathName5 = location.pathname === "/product-list" && "Product List";

  return (
    <>
      <div className="pt-16 px-2 md:px-24 lg:px-48 reletive top-0 overflow-hidden mb-20 ">
        {isHomePage ? (
          <Navbar />
        ) : (
          <InnerNavbar>
            {pathName1 || pathName2 || pathName3 || pathName4 || pathName5}
          </InnerNavbar>
        )}

        <main className="pt-5">
          <Outlet />
        </main>
        {!pathName5 ? <NavigationBar /> : null}
      </div>
    </>
  );
}

export default AppLayout;
