import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MyListings from "../components/MyListings";
import { userActions } from "../store/userSlice";

const MyAccount = () => {
  const userStatus = useSelector((state) => state.user.loggedIn);
  const userName = useSelector((state) => state.user.firstname);
  const [currentListings, setCurrentListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteListing, setDeleteListing] = useState("");
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logOutUser());
  };

  useEffect(() => {
    const myListings = async () => {
      const response = await fetch(
        "https://houseplantdirect-default-rtdb.firebaseio.com/users.json"
      );
      const users = await response.json();
      const userArray = Object.values(users);
      const foundUser = userArray.findIndex((x) => x.firstname === userName);
      if (foundUser < 0) {
        return;
      }
      const userKey = Object.keys(users)[foundUser];
      const currentListings = await fetch(
        `https://houseplantdirect-default-rtdb.firebaseio.com/users/${userKey}/currentlistings.json`
      );
      const currentListingsJSON = await currentListings.json();
      const currentListingsArray = Object.values(currentListingsJSON);
      setCurrentListings(currentListingsArray);
    };

    const timer1 = setTimeout(() => {
      setLoading(true);
      myListings();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      setLoading(false);
    };
  }, [userName, deleteListing]);

  if (!userStatus) {
    return (
      <h3 className="notloggedin">
        Uh oh! Please login first before accessing this page!
      </h3>
    );
  } else {
    return (
      <div id="profilepage">
        <div className="userInfo">
          <h2>Hello, {userName} </h2>
          <h3 className="subheading">
            Thanks for being a member of HousePlantDirect!
          </h3>
        </div>
        <div className="my-listings">
          {loading === false && <h3 className="subheading">Loading...</h3>}
          {loading === true && currentListings.length === 0 && (
            <h3 className="subheading">No listings! Add one below!</h3>
          )}
          {loading === true && <h3 className="subheading">My Listings:</h3> &&
            currentListings.map((item) => (
              <MyListings
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                ending={item.endingdate}
                img={item.image}
                onLoading={(e) => setDeleteListing(e)}
              />
            ))}

          <Link to="/addlisting">
            <button className="hero-button">+Add Listing</button>
          </Link>
        </div>
        <button onClick={logoutHandler} className="hero-button">
          Logout
        </button>
      </div>
    );
  }
};
export default MyAccount;
