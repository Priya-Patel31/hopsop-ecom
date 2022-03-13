import { ProductCard} from "../../index";
import productData from "../../../../temp/data.json"

const Products = () => {
    let products = productData.products;

    return (
        <div class="hero-section-container">
        <div class="space-2rem"></div>
        <h1 class="text-center text-sm">My Products</h1>
        <div class="space-2rem"></div>
        <div class="vertical-card-outer-container">

            {products.map((product) => {
                return (<ProductCard value={product}/>)
            })}
            </div>
      </div>
    )
}
export default Products;