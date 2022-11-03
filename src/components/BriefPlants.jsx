import PlantCard from "./PlantCard";
import { useEffect, useState } from "react";

const BriefPlants = () => {
  const [listingArray, setListingArray] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch(
        "https://houseplantdirect-default-rtdb.firebaseio.com/currentlistings.json"
      );
      const listings = await response.json();
      setListingArray(Object.values(listings));
    };
    fetchListings();
  }, []);

  return (
    <div className="featuredplants">
      <h3 id="home-subtitle">Featured Plants:</h3>
      <div className="modal">
        <div className="plant-modal">
          {listingArray.map((element) => (
            <PlantCard
              name={element.title}
              price={element.price}
              img={element.image}
              user={element.username}
            />
          ))}
        </div>
      </div>
      <button className="hero-button">See all current auctions.</button>
    </div>
  );
};

export default BriefPlants;
