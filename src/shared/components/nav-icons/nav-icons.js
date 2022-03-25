import { FaUserAlt, FaShoppingCart, FaHeart } from "../../../assets/icons";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth} from "../../../context/auth/authContext";
import { useCart } from "../../../context/cart/cartContext";
import { useWishlist } from "../../../context/wishlist/wishlistContext";


const NavIcons = () => {
  const { isUserloggedIn,logout } = useAuth();
  const {cart} = useCart();
  const {wishlist} = useWishlist();


  return (
    <ul className="nav-icons list-style-none">
      <li>
        <button className="flex-col nav-icon-link dropdown">
          <div className="dropbtn flex-col">
            <span className="badge-icon">
              <FaUserAlt className="text-xs icon-size" />
            </span>
            <span className="nav-list-link">User</span>
          </div>
          <div className="dropdown-content">
            {isUserloggedIn && (
              <Link to="/profile" className="text-xs">
                Profile
              </Link>
            )}

            {isUserloggedIn ? (
              <Link to="/" className="text-xs" onClick={()=>{
                logout();
              }}>
                Logout
              </Link>
            ) : (
              <Link to="/auth/login" className="text-xs">
                Login
              </Link>
            )}
          </div>
        </button>
      </li>
      <li>
        <Link to="/wishlist" className="flex-col nav-icon-link wishlist-button">
          <span className="badge-icon">
            <FaHeart className="text-xs icon-size" />
           {wishlist.length !== 0 && <span className="badge-count">{wishlist.length}</span>}
          </span>
          <span className="nav-list-link">Wishlist</span>
        </Link>
      </li>
      <li>
        <Link to="/cart" className="flex-col nav-icon-link">
          <span className="badge-icon">
            <FaShoppingCart className="text-xs icon-size" />
            {cart.length !== 0 && <span className="badge-count">{cart.length}</span>}
          </span>
          <span className="nav-list-link">Cart</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavIcons;
