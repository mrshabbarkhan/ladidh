import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import HomePage from "./features/Home/HomePage";
import CategoryPage from "./features/Category/CategoryPage";
import FavoritesPage from "./features/Favorites/FavoritesPage";
import CartPage from "./features/Cart/CartPage";
import PageNotFound from "./components/PageNotFound";
import ProfilePage from "./features/User/ProfilePage";
import ProductListPage from "./features/Product-list/ProductListPage";
import ProductDetails from "./features/Product-list/ProductDetails";
import OrderPage from "./features/Order/OrderPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/",  element: <HomePage /> },
      { path: "/category", element: <CategoryPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/product-list", element: <ProductListPage /> },
      { path: "/product-details", element: <ProductDetails /> },
      { path: "/orders", element: <OrderPage /> },
    ],
    errorElement: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
