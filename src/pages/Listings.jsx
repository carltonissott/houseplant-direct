import { useState } from "react";
import { useEffect } from "react";
import PlantCardListingPage from "../components/PlantCardListingPage";

const Listings = () => {
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
    <div className="listings">
      {/* <h2></h2> */}
      <div className="listing-grid">
        {listingArray.length === 0 ? (
          <h3 className="subheading">No Current Auctions</h3>
        ) : (
          listingArray.map((element) => (
            <PlantCardListingPage
              name={element.title}
              price={element.price}
              time={element.endingdate}
              img={element.image}
              user={element.username}
              key={element.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Listings;
