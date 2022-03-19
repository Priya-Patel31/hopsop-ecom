import { AiFillMinusCircle, AiFillPlusCircle } from "../../../assets/icons";
import { price } from "../../utils/function";
import { useCart } from "../../../context/cart/cartContext";
import "./horizontalCard.css";

const HorizontalCard = (props) => {
  let {
    _id,
    name,
    brand,
    image_url,
    details,
    original_price,
    discount_percent,
    quantity,
  } = props;

  let { dispatch } = useCart();

  return (
    <div className="card-horizontal">
      <div className="card-horizontal-image-container">
        <img className="card-image-horizontal" src={image_url} alt="img" />
      </div>

      <div className="card-horizontal-text-container">
        <h2 className="card-horizontal-heading text-sm">{brand}</h2>
        <p className="font-semibold card-horizontal-sub-heading text-xs my-2">
          {name}
        </p>
        <p className="card-horizontal-product-desc text-xs">{details}</p>
        <div className="card-quantity flex-row">
          <button
            className="text-sm quantity-btn"
            disabled={quantity === 1 ? true : false}
            onClick={() => {
              dispatch({ type: "DECREASE_QUANTITY", payload: { id: _id } });
            }}
          >
            <AiFillMinusCircle />
          </button>
          &nbsp;<p className="text-xs">{quantity}</p>&nbsp;
          <button
            className="text-sm quantity-btn"
            onClick={() => {
              dispatch({ type: "INCREASE_QUANTITY", payload: { id: _id } });
            }}
          >
            <AiFillPlusCircle />
          </button>
        </div>
        <p className="discount-price font-semibold inline-block mb-1">
          Rs.{price(original_price, discount_percent)}
        </p>
        <p className="original-price inline-block"> Rs.{original_price}</p>
        <small className="discount-rate inline-block">
          ({discount_percent}% OFF)
        </small>

        <div className="flex-row card-horizontal-button">
          <button
            className="button primary-button-pink cart-btn"
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: { id: _id } });
            }}
          >
            Remove from cart
          </button>
          <button className="button secondary-button-light cart-btn">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export { HorizontalCard };
