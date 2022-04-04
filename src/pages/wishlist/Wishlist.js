import React from "react";
import "./wishlist.css"
import { WishlistContainer } from "../wishlist/components/wishlistContainer/WishlistContainer";

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <WishlistContainer />
    </div>
  );
};

export { Wishlist };
