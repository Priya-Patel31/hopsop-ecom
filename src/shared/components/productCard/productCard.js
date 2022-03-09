import "./productCard.css"
import {FiHeart} from "react-icons/fi";
import {FaShoppingCart} from "react-icons/fa"
const ProductCard = () => {
    return (
        <a
          className="vertical-card-container"
          href="/single_product/single_product.html"
        >
          <div className="card-hover">
            <div className="vertical-image-container">
              <img
                className="vertical-image hover-image"
                src="https://cdn.shopify.com/s/files/1/0550/0465/9885/products/h24-600x600.png?v=1615134141"
                alt="verticalImage"
              />
              <span className="badge bg-primary badge-trending text-xs">
                Trending
              </span>
            </div>
          </div>
          <div className="vertical-card-text-container">
            <div className="vertical-card-content">
              <div className="flex-row vertical-card-heading">
                <h3 className="text-xs">Climb Backyard</h3>
                <i className="fas fa-heart-circle text-sm"></i>
              </div>
              <span className="discount-price font-semibold">Rs.3000</span>
              <span className="original-price">Rs.4000</span>
            </div>
          </div>
          <button className="button primary-button-pink w-100 mt-1">
            <FaShoppingCart className="icon-white mr-1"/>
            Add to cart
          </button>
          <button className="button secondary-button-light w-100">
            <FiHeart className="mr-1"/>
            Add to wishlist
          </button>
        </a>

        
    )
}

export default ProductCard;