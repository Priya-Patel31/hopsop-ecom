import { ProductCard } from "../../index";
import { useProduct } from "../../../../context/products/productContext";

const Products = () => {
  let { products } = useProduct();

  return (
    <div class="hero-section-container">
      <div class="space-2rem"></div>
      <h1 class="text-center text-sm">My Products</h1>
      <div class="space-2rem"></div>
      <div class="vertical-card-outer-container">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};
export default Products;
