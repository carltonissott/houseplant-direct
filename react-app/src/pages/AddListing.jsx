import { useSelector } from "react-redux";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const AddListing = () => {

  const userName = useSelector((state) => state.user.firstname);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const listing = {
      title: e.target[0].value,
      image: e.target[1].files[0],
      price: e.target[2].value,
      description: e.target[3].value,
    };

    const storageRef = ref(storage, `files/${listing.image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, listing.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },

      (error) => {
        console.log("file uploaded unsuccesfully");
      },

      () => {
        // on succuesful upload
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const listingupdated = {
            title: e.target[0].value,
            image: downloadURL,
            price: e.target[2].value,
            endingdate: e.target[3].value,
            description: e.target[4].value,
          };
          uploadData(listingupdated);
        });
      }
    );
  };

  const uploadData = (listingupdated) => {
    const addListingToUser = async () => {
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

      await fetch(
        `https://houseplantdirect-default-rtdb.firebaseio.com/users/${userKey}/currentlistings.json`,
        {
          method: "POST",
          body: JSON.stringify(listingupdated),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    addListingToUser();
  };

  return (
    <div className=" signup-div">
      <h3>Add your plant!</h3>
      <form className="signup-form listing-form" onSubmit={onSubmitHandler}>
        <label htmlFor="title">Listing Title:</label>
        <input id="title" type="text" placeholder="Your Listing Title"></input>
        <label id="plantimagelabel" htmlFor="plantimage">
          Upload Picture:
        </label>
        <input
          type="file"
          name="plantimage"
          id="plantimage"
          accept=".jpg,.png,.jpeg"
        />
        <label htmlFor="price">Price:</label>
        <input id="price" type="number" placeholder="$69"></input>
        <label htmlFor="endingdate">Ending Date:</label>
        <input id="endingdate" type="date" />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Write all about your plant here! Be sure to include details about size, leaf count, varigation, etc.!"
        />
        <button className="hero-button">Submit!</button>
      </form>
    </div>
  );
};

export default AddListing;
