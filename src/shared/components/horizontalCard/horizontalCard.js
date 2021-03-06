import { AiFillMinusCircle, AiFillPlusCircle } from "../../../assets/icons";
import { price } from "../../utils/function";
import { useCart } from "../../../context/cart/cartContext";
import "./horizontalCard.css";
import { useWishlist } from "../../../context/wishlist/wishlistContext";
import { toast } from "react-toastify";

const HorizontalCard = (props) => {
  let {
    _id,
    name,
    brand,
    image_url,
    details,
    original_price,
    discount_percent,
    qty,
    
  } = props;

  let {updateQuantity,removeFromCart } = useCart();
  const {findItemInWishlist,addToWishlist,removeFromWishlist} = useWishlist();

  let isItemPresentInWishlist = findItemInWishlist(_id);

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
            disabled={qty === 1 ? true : false}
            onClick={async() => {
             const success = await updateQuantity(_id,false);
             if(success){
               toast.success("Item decreased")
             }else{
               toast.error("Something went wrong")
             }
            }}
          >
            <AiFillMinusCircle />
          </button>
          &nbsp;<p className="text-xs">{qty}</p>&nbsp;
          <button
            className="text-sm quantity-btn"
            onClick={async() => {
            const success = await updateQuantity(_id);
            if(success){
              toast.success("Item increased");
            }else{
              toast.error("Something went wrong")
            }
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
            onClick={async() => {
              const success = await removeFromCart(_id)
              if(success){
                toast.success("Removed item successfully");
              }else{
                toast.error("Something went wrong");
              }
            }}
          >
            Remove from cart
          </button>
          <button className="button secondary-button-light cart-btn" onClick={async (e) => {
          e.stopPropagation();
          e.preventDefault();
          if(!isItemPresentInWishlist){
            const success = await addToWishlist(props);
            if(success){
              toast.success("Added item to wishlist");
            }else{
              toast.error("Something went wrong")
            }
          }else{
           const success = await removeFromWishlist(_id)
           if(success){
             toast.success("Removed item from wishlist");
           }else{
             toast.error("Something went wrong");
           }
          }
        }}>
           {isItemPresentInWishlist ? "Remove from wishlist":"Add to wishlist"} 
          </button>
        </div>
      </div>
    </div>
  );
};
export { HorizontalCard };
