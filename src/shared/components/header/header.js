import Logo from "../logo/logo";
import NavIcons from "../nav-icons/nav-icons";
import NavItems from "../nav-items/nav-items";
import Searchbar from "../searchBar/searchbar";
import "../header/header.css"
import {FaBars} from "react-icons/fa"

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="left-navbar">
        <div className="hamburger-icon">
          <FaBars />
        </div>
        <Logo></Logo>
        <NavItems></NavItems>
      </div>
      <Searchbar></Searchbar>
      <div className="right-navbar">
       <NavIcons></NavIcons>
      </div>
    </nav>
  );
};

export default Header;
