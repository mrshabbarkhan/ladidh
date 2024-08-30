import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PageNotFound from "./components/PageNotFound";
import AdminLayout from "./features/admin/components/AdminLayout";
import DashboardPage from "./features/admin/page/dashboard/DashboardPage";
import ProductPage from "./features/admin/page/products/ProductPage";
import CategoriesPage from "./features/admin/page/Categories/CategoriesPage";
import UsersPage from "./features/admin/page/users/UsersPage";

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

const isAdmin = true;

const userRoutes = {
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: isAdmin ? <Navigate to="/admin" replace /> : <HomePage />,
    },
    { path: "/category", element: <CategoryPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/product-list", element: <ProductListPage /> },
    { path: "/product-details", element: <ProductDetails /> },
    { path: "/orders", element: <OrderPage /> },
    { path: "/payment", element: <PaymentPage /> },
  ],
  errorElement: <PageNotFound />,
};

const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <DashboardPage /> },
    { path: "/admin/products", element: <ProductPage /> },
    { path: "/admin/category", element: <CategoriesPage /> },
    { path: "/admin/users", element: <UsersPage /> },
    
  ],
};

const router = createBrowserRouter([isAdmin ? adminRoutes : userRoutes]);

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
