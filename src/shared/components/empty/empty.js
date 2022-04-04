import { emptyCart } from "../../../assets/images";
import "./empty.css"
export const Empty = () => {
  return (
    <div className="emptyCart-container">
      <img src={emptyCart} className="empty-cart-image" alt="empty" />
    </div>
  );
};
