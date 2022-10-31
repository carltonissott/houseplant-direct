import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="houseplant logo" />
      <div className="navigation">
        <p>Current Auctions</p>
        <p>News</p>
        <p>FAQ</p>
        <p>Sell</p>
      </div>
      <button className="hero-button">+ Sign Up</button>
    </header>
  );
};

export default Header;
