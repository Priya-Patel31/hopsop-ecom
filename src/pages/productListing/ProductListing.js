import { Filter, Products } from "./index";
import "./productlisting.css";

const ProductListing = () => {
  return (
    <main className="products-container">
      <div className="main-content-container">
        <Filter />
        <Products />
      </div>
    </main>
  );
};

export default ProductListing;
