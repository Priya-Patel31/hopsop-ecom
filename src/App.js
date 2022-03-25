import "./global.css";
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductListing />} />

        <Route path="/mockApi" element={<MockAPI />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
