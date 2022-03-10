import {NavIcons,NavItems,Searchbar,Logo} from "../assets/index"
import "../header/header.css";
import { FaBars } from "../assets/icons";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="left-navbar">
        <div className="hamburger-icon">
          <FaBars />
        </div>
        <Logo />
        <NavItems />
      </div>
      <Searchbar />
      <div className="right-navbar">
        <NavIcons />
      </div>
    </nav>
  );
};

export default Header;
