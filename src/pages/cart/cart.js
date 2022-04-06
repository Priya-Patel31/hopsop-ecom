import { CartItems } from "./index";
import "./cart.css";

const Cart = () => {
  return (
    <main className="carts-container">
      <div className="space-1rem"></div>
      <h2 className="cart-heading text-sm font-semibold mt-2">MY CART</h2>
      <div className="space-3rem"></div>
      <CartItems />
    </main>
  );
};
export { Cart };
