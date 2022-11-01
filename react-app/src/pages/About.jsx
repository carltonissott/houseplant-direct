import signup from "../assets/signup.svg";
import addpost from "../assets/addpost.svg";
import getpaid from "../assets/getpaid.svg";
const About = () => {
  return (
    <div>
      <div className="homedivide">
        <img src={signup} alt="creating account" />

        <div className="homedivide-description">
          <h3>1. Sign up for an account.</h3>
          <h5>
            Head over to our Create Account Portal and get started! Create an
            account in order to both buy and sell on this platform. It's easy!
          </h5>
        </div>
      </div>
      <div className="homedivide">
        <div className="homedivide-description">
          <h3>2. Add your plants for sale. </h3>
          <h5>
            Once you've created your account, add your listing to our database!
            You get to set your reserve, your deadline, and your shipping
            preference. And remember, no fees, ever.
          </h5>
        </div>
        <img src={addpost} alt="addingplant" />
      </div>
      <div className="homedivide">
        <img src={getpaid} alt="gettingpaid" />
        <h3>3. Get paid.</h3>
      </div>
    </div>
  );
};

export default About;
