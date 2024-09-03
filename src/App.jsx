import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { lazy, Suspense } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import PageNotFound from "./components/PageNotFound";
import AdminLayout from "./features/admin/components/AdminLayout";
import DashboardPage from "./features/admin/page/dashboard/DashboardPage";
import ProductPage from "./features/admin/page/products/ProductPage";
import CategoriesPage from "./features/admin/page/Categories/CategoriesPage";
import UsersPage from "./features/admin/page/users/UsersPage";
import ProtectedRoute from "./features/admin/components/ProtectedRoute";
import BannerPage from "./features/admin/page/banners/BannerPage";

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

function RoutesWrapper() {
  const { isAdmin } = useSelector((state) => state.search);


  const combinedRoutes = [
    {
      path: "/",
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
      errorElement: <PageNotFound />,
    },

    ...(isAdmin
      ? [
          {
            path: "/admin",
            element: (
              <ProtectedRoute isAdmin={isAdmin} element={<AdminLayout />} />
            ),
            children: [
              { index: true, element: <DashboardPage /> },
              { path: "/admin/products", element: <ProductPage /> },
              { path: "/admin/category", element: <CategoriesPage /> },
              { path: "/admin/users", element: <UsersPage /> },
              { path: "/admin/banners", element: <BannerPage /> },
            ],
            errorElement: <PageNotFound />,
          },
        ]
      : []),
  ];

  const router = createBrowserRouter(combinedRoutes);

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading....</div>}>
        <RoutesWrapper />
      </Suspense>
    </Provider>
  );
}

export default App;
