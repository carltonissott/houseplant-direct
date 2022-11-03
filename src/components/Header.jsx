import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userStatus = useSelector((state) => state.user.loggedIn);

  return (
    <header>
      <Link id="logo" to="/houseplant-direct">
        <img src={logo} alt="houseplant logo" />
      </Link>
      <div className="navigation">
        <NavLink className="header-link" to="/houseplant-direct/listings">
          Current Auctions
        </NavLink>

        <NavLink className="header-link" to="/houseplant-direct/faq">
          FAQ
        </NavLink>
        <NavLink className="header-link" to="/houseplant-direct/about">
          Sell
        </NavLink>
      </div>
      {userStatus && (
        <NavLink to="/houseplant-direct/myaccount">
          <button className="hero-button">My Account</button>
        </NavLink>
      )}
      {!userStatus && (
        <NavLink to="/houseplant-directsignup">
          <button className="hero-button">+ Sign Up</button>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
