import {useCart} from "../../../../context/cart/cartContext"
const Coupon = ()=>{
  const {cartSummary} = useCart()
    return (
        <div className="cart-summary flex-col">
        <p className="font-bold mb-1 text-xs">COUPONS</p>
        <button className="button secondary-button-light coupon-btn">
          <span>
            <i className="fas fa-tag mr-1 icon-black text-xs"></i>
          </span>
          Apply Coupon
        </button>
        <div className="my-1 font-bold text-xs">PRICE DETAILS</div>
        <div className="flex-row my-1 justify-between">
          <p className="col-80-pc text-xs">Total MRP</p>
          <p className="col-20-pc text-xs">₹{cartSummary.cartValue}</p>
        </div>
        <div className="flex-row my-1 justify-between">
          <p className="col-80-pc text-xs">Discount on MRP</p>
          <p className="col-20-pc text-xs">₹{cartSummary.totalDiscount}</p>
        </div>

        <div className="flex-row my-1 justify-between">
          <p className="col-80-pc text-xs">Convenience Fee</p>
          <p className="col-20-pc text-xs">₹40</p>
        </div>
        <div className="flex-row my-1 justify-between">
          <p className="col-80-pc font-bold text-xs">Total Amount</p>
          <p className="col-20-pc font-bold text-xs">₹{cartSummary.cartValue-cartSummary.totalDiscount+40}</p>
        </div>
        <button className="my-2 button primary-button-pink">Place Order</button>
      </div>
    )
}
export {Coupon};