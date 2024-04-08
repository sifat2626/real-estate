import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rent from "../pages/Rent/Rent";
import Buy from "../pages/Buy/Buy";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

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
        element: <Buy />,
      },
      {
        path: "/rent",
        element: <Rent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <EstateDetails />,
        loader: () => fetch("/estateData.json"),
      },
    ],
  },
]);
