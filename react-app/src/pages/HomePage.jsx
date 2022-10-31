import BriefPlants from "../components/BriefPlants";

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
        <button className="hero-button">See current plants</button>
      </div>
      <BriefPlants />
    </>
  );
};

export default HomePage;
