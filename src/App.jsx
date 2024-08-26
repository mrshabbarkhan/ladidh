import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PageNotFound from "./components/PageNotFound";

const HomePage = lazy(() => import("./features/Home/HomePage"));
const CategoryPage = lazy(() => import("./features/Category/CategoryPage"));
const FavoritesPage = lazy(() => import("./features/Favorites/FavoritesPage"));
const CartPage = lazy(() => import("./features/Cart/CartPage"));
const ProfilePage = lazy(() => import("./features/User/ProfilePage"));
const ProductListPage = lazy(() =>
  import("./features/Product-list/ProductListPage")
);
const ProductDetails = lazy(() =>
  import("./features/Product-list/ProductDetails")
);
const OrderPage = lazy(() => import("./features/Order/OrderPage"));
const PaymentPage = lazy(() => import("./features/Payment/PaymentPage"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/category", element: <CategoryPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/product-list", element: <ProductListPage /> },
      { path: "/product-details", element: <ProductDetails /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/payment", element: <PaymentPage /> },
    ],
    errorElement: <PageNotFound/>
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading....</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;
