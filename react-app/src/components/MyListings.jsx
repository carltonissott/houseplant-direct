import { useSelector } from "react-redux";

const MyListings = (props) => {
  const userName = useSelector((state) => state.user.firstname);
  const deleteListing = (e) => {
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
      const listingKeys = Object.keys(currentListingsJSON);
      const listingIndex = currentListingsArray.indexOf(
        currentListingsArray.find((x) => x.title === e.target.id)
      );
      const deleted = listingKeys[listingIndex];
      const currentListingsP = await fetch(
        `https://houseplantdirect-default-rtdb.firebaseio.com/users/${userKey}/currentlistings.json`
      );

      const currentListingsJSONP = await currentListings.json();
      const currentListingsArrayP = Object.values(currentListingsJSONP);
      const listingKeysP = Object.keys(currentListingsJSONP);
      const listingIndexP = currentListingsArrayP.indexOf(
        currentListingsArray.find((x) => x.title === e.target.id)
      );
      const deletedP = listingKeysP[listingIndexP];

      await fetch(
        `https://houseplantdirect-default-rtdb.firebaseio.com/users/${userKey}/currentlistings/${deleted}.json`,
        {
          method: "DELETE",
        }
      );
      await fetch(
        `https://houseplantdirect-default-rtdb.firebaseio.com/users/currentlistings/${deletedP}.json`,
        {
          method: "DELETE",
        }
      );
    };
    myListings();
    props.onLoading(props.title);
  };

  return (
    <div className="my-listing-card">
      <img className="listing-image" src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h4>Starting Price: ${props.price}</h4>
      <h4>{props.ending}</h4>
      <img
        src="https://img.icons8.com/material-two-tone/38/000000/delete-sign.png"
        id={props.title}
        alt={props.title}
        className="deleteicon"
        onClick={deleteListing}
      />
    </div>
  );
};

export default MyListings;
