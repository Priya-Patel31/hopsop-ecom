import React from "react";
import { WishlistCard } from "../wishlistCard/WishlistCard";
import { useWishlist } from "../../../../context/wishlist/wishlistContext";
import { Empty } from "../../../../shared/components/empty/empty";

const WishlistContainer = () => {
  const { wishlist } = useWishlist();

  return (
    <div>
      <main className="wislist-cards-container">
        <div className="space-1rem"></div>
        <h2 className="text-center mt-2 text-sm font-semibold">MY WISHLIST</h2>
        <div className="space-3rem"></div>
        {wishlist.length < 1 ? (
          <div>
            <p className="text-pink text-xs text-center wishlist-description">Ohh no !! It's empty</p>
            <Empty />
          </div>
        ) : (
          <div className="vertical-card-outer-container">
            {wishlist.map((item) => (
              <WishlistCard key={item._id} {...item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export { WishlistContainer };
