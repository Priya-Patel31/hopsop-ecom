import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container py-2 flex-col">
      <div className="footer-text text-sm icon-white">
        Made with ❤ by Priya Patel
      </div>
      <ul className="footer-items flex-row">
        <li className="footer-item list-style-none">
          <a href="https://github.com/Priya-Patel31">
            <span className="footer-icon">
              <AiFillGithub className="icon-white text-sm" />
            </span>
          </a>
        </li>
        <li className="footer-item list-style-none">
          <a href="https://github.com/Priya-Patel31">
            <span className="footer-icon">
              <BsTwitter className="icon-white text-sm" />
            </span>
          </a>
        </li>
        <li className="footer-item list-style-none">
          <a href="https://www.linkedin.com/in/priya-patel-201b33202">
            <span className="footer-icon">
              <FaLinkedinIn className="icon-white text-sm" />
            </span>
          </a>
        </li>
      </ul>
      <div className="icon-white text-xs">&copy; Copyright 2022</div>
    </footer>
  );
};
export default Footer;
