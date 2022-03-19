import {FaUserAlt,FaShoppingCart,FaHeart} from "../../../assets/icons"
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <ul className="nav-icons list-style-none">
      <li>
        <button className="flex-col nav-icon-link dropdown">
          <div className="dropbtn flex-col">
            <span className="badge-icon">
              <FaUserAlt className="text-xs icon-size"/>
            </span>
            <span className="nav-list-link">User</span>
          </div>
          <div className="dropdown-content">
            <a href="/authentication/signin/signin.html" className="text-xs">
              Login
            </a>
            <Link to="" className="text-xs">
              Profile
            </Link>
          </div>
        </button>
      </li>
      <li>
        <Link
          to="/wishlist"
          className="flex-col nav-icon-link wishlist-button">
          <span className="badge-icon">
            <FaHeart className="text-xs icon-size"/>
            <span className="badge-count">10</span>
          </span>
          <span className="nav-list-link">Wishlist</span>
        </Link>
      </li>
      <li>
        <Link to="/carts" className="flex-col nav-icon-link">
          <span className="badge-icon">
            <FaShoppingCart className="text-xs icon-size"/>
            <span className="badge-count">10</span>
          </span>
          <span className="nav-list-link">Cart</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavIcons;
