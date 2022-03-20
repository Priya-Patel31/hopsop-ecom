import React from "react";
import  Header  from "../../shared/components/header/header";
import  Footer  from "../../shared/components/footer/footer";
import { WishlistContainer } from "../wishlist/components/wishlistContainer/WishlistContainer";


const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <Header />
      <WishlistContainer />
      <Footer />
    </div>
  );
};

export { Wishlist };
