import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link id="logo" to="/">
        <img src={logo} alt="houseplant logo" />
      </Link>
      <div className="navigation">
        <NavLink className="header-link" to="listings">
          Current Auctions
        </NavLink>
        <NavLink className="header-link" to="about">
          About
        </NavLink>
        <NavLink className="header-link" to="faq">
          FAQ
        </NavLink>
        <NavLink className="header-link" to="sell">
          Sell
        </NavLink>
      </div>
      <NavLink to="signup">
        <button className="hero-button">+ Sign Up</button>
      </NavLink>
    </header>
  );
};

export default Header;
