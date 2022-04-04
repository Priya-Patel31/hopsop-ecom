import "./global.css";
import Home from "./pages/home/home";
import ProductListing from "./pages/productListing/ProductListing";
import { Routes, Route, Link } from "react-router-dom";
import MockAPI from "./mockMan";
import { Cart } from "./pages/cart/cart";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Auth } from "./pages/auth/auth";
import { Login } from "./pages/auth/login/login";
import { Signup } from "./pages/auth/signup/signup";
import { PrivateRoute } from "./shared/components/privateRoute/privateRoute";
import { useAuth } from "./context/auth/authContext";
import { WithHeaderAndFooter } from "./shared/components/withHeaderAndFooter/withHeaderAndFooter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageNotFound } from "./shared/components/404NotFound/pageNotFound";

function App() {
  const { isUserLoggedIn } = useAuth();
  
  return (
    <div className="App">
      <ToastContainer theme="colored"/>
      <Routes>
        <Route path="/mockApi" element={<MockAPI />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductListing />} />

          <Route
            path="cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
        </Route>
        {!isUserLoggedIn && (
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        )}
       
      </Routes>
    </div>
  );
}

export default App;
