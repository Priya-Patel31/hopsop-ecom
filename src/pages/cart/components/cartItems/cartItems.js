import { HorizontalCard, Coupon, useCart ,Empty} from "../../index";

const CartItems = () => {
  const { cart } = useCart();
  return (
    <div
      className={cart.length < 1 ? "empty-container" : "cart-items-container"}
    >
      <div className={cart.length < 1 ? "empty" : "cart-item"}>
        {cart.length < 1 ? (
          <div>
            <p className="cart-description text-center text-xs text-pink">Ohh no !!  It's Empty</p>
            <Empty />
          </div>
        ) : (
          cart.map((item) => <HorizontalCard key={item._id} {...item} />)
        )}
      </div>
      {cart.length >= 1 && <Coupon />}
    </div>
  );
};

export { CartItems };
