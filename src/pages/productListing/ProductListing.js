import { Header, Filter, Footer, Products } from "./index";
import "./productlisting.css";

const ProductListing = () => {
  return (
    <main className="products-container">
      <Header />
      <div className="main-content-container">
        <Filter />
        <Products />
        <Footer />
      </div>
    </main>
  );
};

export default ProductListing;
