import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MyListings from "../components/MyListings";
import { userActions } from "../store/userSlice";

const MyAccount = () => {
  const userStatus = useSelector((state) => state.user.loggedIn);
  const userName = useSelector((state) => state.user.firstname);
  const [currentListings, setCurrentListings] = useState([])

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
      setCurrentListings(currentListingsArray)
    };
    myListings();
  }, [userName]);

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
          <h3 className="subheading">My Listings:</h3>
          {currentListings.map((item)=>(
            <MyListings title={item.title} description={item.description} price={item.price} ending={item.endingdate} img={item.image} />
          ))}
          
          <Link to="/addlisting">
            <button className="hero-button">+Add Listing</button>
          </Link>
        </div>
        <button onClick={logoutHandler} className="hero-button">
          {" "}
          Logout
        </button>
      </div>
    );
  }
};
export default MyAccount;
