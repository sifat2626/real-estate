import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rent from "../pages/Rent/Rent";
import Buy from "../pages/Buy/Buy";
import About from "../pages/About/About";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Listings from "../pages/Listings/Listings";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import WishList from "../pages/WishList/WishList";
import Order from "../pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/buy",
        element: (
          <PrivateRoute>
            <Buy />
          </PrivateRoute>
        ),
      },
      {
        path: "/rent",
        element: (
          <PrivateRoute>
            <Rent />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/estateData.json"),
      },
      {
        path: "/listings",
        element: (
          <PrivateRoute>
            <Listings />
          </PrivateRoute>
        ),
        loader: () => fetch("/estateData.json"),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
        loader: () => fetch("/estateData.json"),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
        loader: () => fetch("/estateData.json"),
      },
    ],
  },
]);
