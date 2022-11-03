import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const PlantCardListingPage = (props) => {
  // const endingDate = new Date([props.time]); changed for omptimizations
  const memorizedDate = useMemo(() => new Date([props.time]), [props]);

  const [timeLeft, setTimeLeft] = useState(
    memorizedDate - new Date().getTime()
  );
  const [timeCountdown, setTimeCountdown] = useState();
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTimeLeft(memorizedDate - new Date().getTime());
    }, 1000);
    setTimeCountdown({
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    });

    return () => {
      clearTimeout(timer1);
    };
  }, [timeLeft, memorizedDate]);

  return (
    <div className="plant-card-listing">
      <div className="empty">
        <h4 className="listing-price">${props.price}</h4>
      </div>
      <img className="plant-image-listing" src={props.img} alt={props.name} />
      {timeCountdown && (
        <div className="time-display">
          <h5>{timeCountdown.days} days </h5>
          <h5>{timeCountdown.hours} hrs </h5>
          <h5>{timeCountdown.minutes} mins </h5>
          <h5>{timeCountdown.seconds} secs</h5>
        </div>
      )}

      <h3>
        <Link className="listing-title" to={props.name}>
          {props.name}
        </Link>
      </h3>
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
