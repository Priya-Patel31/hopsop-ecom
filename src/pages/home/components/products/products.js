import { useProduct } from "../../../../context/products/productContext";
import ProductCard from "../../../../shared/components/productCard/productCard";

const Products = () => {
  const { allProducts } = useProduct();
  return (
    <>
      <div className="space-4rem"></div>
      <h2 className="heading text-lg font-extrabold">
        OUR <span className="text-pink font-extrabold">PRODUCTS</span>
      </h2>
      <div className="space-4rem"></div>
      <div className="flex-row flex-wrap justify-evenly gap-1 mx-3">
        <ProductCard {...allProducts[0]} />
        <ProductCard {...allProducts[1]} /> 
        <ProductCard {...allProducts[2]} />
        <ProductCard {...allProducts[3]} />
      </div>
    </>
  );
};
export default Products;
