import { useSelector, useDispatch } from "react-redux";
import MyListings from "../components/MyListings";
import { userActions } from "../store/userSlice";

const MyAccount = () => {
  const userStatus = useSelector((state) => state.user.loggedIn);
  const userName = useSelector((state) => state.user.firstname);


  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(userActions.logOutUser());
  };

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
          <MyListings />
          <button className="hero-button">+Add Listing</button>
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
