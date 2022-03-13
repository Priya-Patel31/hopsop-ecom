import Header from "./shared/components/header/header";
import Footer from "./shared/components/footer/footer";
import "./global.css";
import Home from "./pages/home/home";
import ProductListing from "./pages/productListing/ProductListing";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ProductListing />
    </div>
  );
}

export default App;
