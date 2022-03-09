import { Fragment } from "react";
import ProductCard from "../../../../shared/components/productCard/productCard";

const Products = () => {
  return (
    <Fragment>
      <div className="space-4rem"></div>
      <h2 className="heading text-lg font-extrabold">
        OUR <span className="text-pink font-extrabold">PRODUCTS</span>
      </h2>
      <div className="space-4rem"></div>
      <div className="flex-row flex-wrap justify-evenly gap-1 mx-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Fragment>
  );
};
export default Products;
