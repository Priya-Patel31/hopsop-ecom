import {HorizontalCard,Coupon,useCart} from "./index"

const CartItems = () => {
  const {cart} = useCart()
  return (
    <div className="cart-items-container">
      <div className="cart-item">
        {cart.map((item) =>  <HorizontalCard key={item._id} {...item} />
        )}
      </div>
      <Coupon  />
    </div>
  );
};

export {CartItems};
