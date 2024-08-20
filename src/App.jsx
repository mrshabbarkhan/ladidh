import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import HomePage from "./features/Home/HomePage";
import CategoryPage from "./features/Category/CategoryPage";
import FavoritesPage from "./features/Favorites/FavoritesPage";
import CartPage from "./features/Cart/CartPage";
import PageNotFound from "./components/PageNotFound";
import ProfilePage from "./features/User/ProfilePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/category", element: <CategoryPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
    errorElement: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
