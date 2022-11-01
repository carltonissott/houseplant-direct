const PlantCardListingPage = (props) => {
  return (
    <div className="plant-card-listing">
      <img className="plant-image-listing" src={props.img} alt={props.nam} />
      <div className="user-description-listing">
        <h4 className="listing-price">${props.price}</h4>
        <h4 className="listing-time">{props.time}</h4>
      </div>

      <h3>{props.name}</h3>
      <div className="plant-card-description-listing">
        <img
          src="https://img.icons8.com/ios/30/ffffFF/username.png"
          alt="user icon"
        />
        <h4>{props.user}</h4>
        
      </div>
    </div>
  );
};

export default PlantCardListingPage;
