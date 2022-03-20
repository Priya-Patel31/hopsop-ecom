import React from "react";
import { FaHeart, FaShoppingCart } from "../../../../assets/icons";
import { price } from "../../../../shared/utils/function";
import { useWishlist } from "../../../../context/wishlist/wishlistContext";
import { useCart } from "../../../../context/cart/cartContext";

const WishlistCard = (props) => {
  const { _id, image_url, name, original_price, discount_percent } = props;
  const { moveToCart, removeFromWishlist } = useWishlist();
  const { findItemInCart } = useCart();
  let isItemPresentInCart = findItemInCart(_id);

  return (
    <div className="vertical-card-container">
      <div className="vertical-image-container">
        <img className="vertical-image" src={image_url} alt="vertical-image" />
        <span className="badge bg-primary badge-trending text-xs">New</span>
      </div>
      <div className="vertical-card-text-container">
        <div className="vertical-card-content">
          <div className="flex-row vertical-card-heading mb-1">
            <h3 className="text-xs">{name}</h3>
            <FaHeart
              className="text-sm text-red"
              onClick={() => {
                removeFromWishlist(_id);
              }}
            />
          </div>
          <span className="discount-price font-semibold">
            Rs.{price(original_price, discount_percent)}
          </span>
          <span className="original-price">Rs.{original_price}</span>
        </div>
      </div>
      <button
        className="button primary-button-pink mt-1 w-100"
        onClick={() => {
          if (isItemPresentInCart) moveToCart(props);
        }}
      >
        <FaShoppingCart className="icon-white mr-1" />
        {isItemPresentInCart ? "Already in cart":"Move to cart"}
      </button>
    </div>
  );
};

export { WishlistCard };
