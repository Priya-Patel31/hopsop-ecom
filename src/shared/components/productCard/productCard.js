import "./productCard.css";
import { FiHeart, FaShoppingCart } from "../../../assets/icons";
import { price } from "../../utils/function";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart/cartContext";
import { useWishlist } from "../../../context/wishlist/wishlistContext";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  let { name, _id, image_url, original_price, discount_percent } = props;
  let navigate = useNavigate();
  const { findItemInCart, addToCart } = useCart();
  const { findItemInWishlist, addToWishlist, removeFromWishlist } =
    useWishlist();

  let isItemPresentInCart = findItemInCart(_id);
  let isItemPresentInWishlist = findItemInWishlist(_id);
  return (
    <Link
      to="/singleProduct"
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
            Rs.{price(original_price, discount_percent)}
          </span>
          <span className="original-price">Rs.{original_price}</span>
        </div>
      </div>
      <button
        className="button primary-button-pink w-100 mt-1"
        onClick={async (e) => {
          e.stopPropagation();
          e.preventDefault();
          if (!isItemPresentInCart) {
            const success = await addToCart(props);
            if (success) {
              toast.success("Added item to cart")
            } else {
              toast.error("Login first")
            }
          } else {
            navigate("/cart");
          }
        }}
      >
        <FaShoppingCart className="icon-white mr-1" />
        {isItemPresentInCart ? "Go to cart" : "Add to cart"}
      </button>
      <button
        className="button secondary-button-light w-100"
        onClick={async (e) => {
          e.stopPropagation();
          e.preventDefault();
          if (!isItemPresentInWishlist) {
           const success=  await addToWishlist(props);
           if(success){
            toast.success("Added item to wishlist")
           }else{
           toast.error("Login first");
           }
           
          } else {
            const success = await removeFromWishlist(_id);
            if(success){
              toast.success("Removed item from wishlist")
            }else{
              toast.error("Something went wrong")
            }
          }
        }}
      >
        <FiHeart className="mr-1" />
        {isItemPresentInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      </button>
    </Link>
  );
};

export default ProductCard;
