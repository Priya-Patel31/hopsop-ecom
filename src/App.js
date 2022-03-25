import "./global.css";
import Home from "./pages/home/home";
import ProductListing from "./pages/productListing/ProductListing";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockMan";
import { Cart } from "./pages/cart/cart";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/mockApi" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
