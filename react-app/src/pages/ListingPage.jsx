import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListingPage = () => {
  const params = useParams();
  const userStatus = useSelector((state) => state.user.loggedIn);
  const userName = useSelector((state) => state.user.firstname);

  const [listingArray, setListingArray] = useState([]);
  const [listingKey, setListingKey] = useState("");

  const increaseBidHandler = (e) => {
    e.preventDefault();
    const updatedListing = {
      price: e.target[0].value,
      image: listingArray.image,
      description: listingArray.description,
      endingdate: listingArray.endingdate,
      title: listingArray.title,
      highestbidder: userName,
    };
    const updateListing = async () => {
      await fetch(
        `https://houseplantdirect-default-rtdb.firebaseio.com/currentlistings/${listingKey}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updatedListing),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    updateListing(updatedListing);
  };
  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch(
        "https://houseplantdirect-default-rtdb.firebaseio.com/currentlistings.json"
      );
      const listings = await response.json();
      const array = Object.values(listings);
      const index = array.findIndex((x) => x.title === params.producttitle);
      setListingKey(Object.keys(listings)[index]);
      setListingArray(array[index]);
    };
    fetchListings();
  }, []);

  const endingDate = new Date([listingArray.endingdate]);

  const [timeLeft, setTimeLeft] = useState(endingDate - new Date().getTime());
  const [timeCountdown, setTimeCountdown] = useState();
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setTimeLeft(endingDate - new Date().getTime());
      setTimeCountdown({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => {
      clearTimeout(timer2);
    };
  }, [timeLeft, endingDate]);

  return (
    <div className="listingpage">
      <div className="listingpage-div">
        <h2>{listingArray.title}</h2>
        <img src={listingArray.image} alt="listing" />
        <h3>Current Price: ${listingArray.price}</h3>
        <div className="listingpage-bid">
          {!userStatus ? (
            <p>Please log in to bid.</p>
          ) : (
            <form onSubmit={increaseBidHandler}>
              <input
                type="number"
                placeholder="enter bid"
                required
                min={listingArray.price}
                max={listingArray.price + 2000}
              />
              <button>submit</button>
            </form>
          )}
        </div>
        <h3>{listingArray.highestbidder}</h3>
        {timeCountdown && (
          <h3>
            Ends in: {timeCountdown.days} days
            {timeCountdown.hours} hours
            {timeCountdown.minutes} minutes
            {timeCountdown.seconds} seconds
          </h3>
        )}
        <p className="listingpage-description">{listingArray.description}</p>
      </div>
    </div>
  );
};

export default ListingPage;
