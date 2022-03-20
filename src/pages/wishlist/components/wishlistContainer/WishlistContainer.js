import React from "react";
import { WishlistCard } from "../wishlistCard/WishlistCard";
import { useWishlist } from "../../../../context/wishlist/wishlistContext";

const WishlistContainer = () => {
  const { wishlist } = useWishlist();

  return (
    <div>
      <main className="wislist-cards-container">
        <div className="space-1rem"></div>
        <h2 className="wishlist-heading mt-2 text-sm font-semibold">
          MY WISHLIST
        </h2>
        <div className="space-3rem"></div>
        <div className="vertical-card-outer-container">
          {wishlist.map((item) => 
          <WishlistCard key={item._id} {...item} />
          )}
        </div>
      </main>
    </div>
  );
};

export { WishlistContainer };
