import { Link } from "react-router-dom";
const NavItems = () => {
  return (
    <ul className="navbar-links list-style-none">
      <li className="navbar-link-list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-link-list-item">
      <Link to="/products">Shop</Link>
      </li>
    </ul>
  );
};

export default NavItems;
