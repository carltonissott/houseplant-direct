// import BriefPlants from "../components/BriefPlants";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="hero">
        <h1 className="big-text">
          Houseplants for your <span className="green-text"> home</span>,
          delivered to your <span className="green-text"> door.</span>
        </h1>
        <h5 className="subheading">
          The newest way to auction and buy plants online with no fees, insured
          shipping, and a money-back guarantee.{" "}
        </h5>
        <Link to="/listings">
          <button className="hero-button">See current plants</button>
        </Link>
      </div>

      {/* <BriefPlants /> */}
      {/* removed for aesthetic reasons */}
    </>
  );
};

export default HomePage;
