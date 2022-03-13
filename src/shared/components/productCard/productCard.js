import "./productCard.css";
import { FiHeart, FaShoppingCart } from "../../../assets/icons";

const ProductCard = (product) => {
  let {
    value: { name, image_url, original_price, discount_percent}
  } = product;

  let discounted_price = parseInt(original_price - original_price*(discount_percent/100), 10);

  return (
    <a
      className="vertical-card-container"
      href="/single_product/single_product.html"
    >
      <div className="card-hover">
        <div className="vertical-image-container">
          <img
            className="vertical-image hover-image"
            src={image_url}
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
            <h3 className="text-xs">{name}</h3>
          </div>
          <span className="discount-price font-semibold">
            Rs.{discounted_price}
          </span>
          <span className="original-price">Rs.{original_price}</span>
        </div>
      </div>
      <button className="button primary-button-pink w-100 mt-1">
        <FaShoppingCart className="icon-white mr-1" />
        Add to cart
      </button>
      <button className="button secondary-button-light w-100">
        <FiHeart className="mr-1" />
        Add to wishlist
      </button>
    </a>
  );
};

export default ProductCard;
