import Home from "./pages/home/home";
import ProductListing from "./pages/productListing/ProductListing";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockMan";
import { Cart } from "./pages/cart/cart";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Auth } from "./pages/auth/auth";
import { Login } from "./pages/auth/login/login";
import { Signup } from "./pages/auth/signup/signup";
import { PrivateRoute } from "./shared/components/privateRoute/privateRoute";
import { useAuth } from "./context/auth/authContext";
import { WithHeaderAndFooter } from "./shared/components/withHeaderAndFooter/withHeaderAndFooter";
import { ToastContainer } from "react-toastify";
import { PageNotFound } from "./shared/components/404NotFound/pageNotFound";

export {
  Home,
  ProductListing,
  Routes,
  Route,
  MockAPI,
  Cart,
  Wishlist,
  Auth,
  Login,
  Signup,
  PrivateRoute,
  useAuth,
  WithHeaderAndFooter,
  ToastContainer,
  PageNotFound,
};
