import {FaUserAlt,FaShoppingCart,FaHeart} from "react-icons/fa"

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
            <a href="/profile_page/profile_page.html" className="text-xs">
              Profile
            </a>
          </div>
        </button>
      </li>
      <li>
        <a
          href="../wishlist/wishlist.html"
          className="flex-col nav-icon-link wishlist-button">
          <span className="badge-icon">
            <FaHeart className="text-xs icon-size"/>
            <span className="badge-count">10</span>
          </span>
          <span className="nav-list-link">Wishlist</span>
        </a>
      </li>
      <li>
        <a href="../carts/carts.html" className="flex-col nav-icon-link">
          <span className="badge-icon">
            <FaShoppingCart className="text-xs icon-size"/>
            <span className="badge-count">10</span>
          </span>
          <span className="nav-list-link">Cart</span>
        </a>
      </li>
    </ul>
  );
};

export default NavIcons;
