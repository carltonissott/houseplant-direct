const PlantCard = (props) => {
  return (
    <div className="plant-card">
      <h3>{props.name}</h3>
      <img className="plant-image" src={props.img} alt={props.nam} />
      <div className="plant-card-description">
        <h4>${props.price}</h4>
        <button className="hero-button">Bid Now!</button>
        <h4>{props.time}</h4>
      </div>
      <div className="user-description">
        <img src="https://img.icons8.com/ios/50/FFFFFF/username.png" alt="user icon" />
        <h4>{props.user}</h4>
      </div>
    </div>
  );
};

export default PlantCard;
