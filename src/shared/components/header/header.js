import {NavIcons,NavItems,Searchbar,Logo} from "./index"
import "./header.css";
import { GoThreeBars } from "../../../assets/icons";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="left-navbar">
        <div className="hamburger-icon">
          <GoThreeBars />
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
