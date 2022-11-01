import { Link } from "react-router-dom";

const SignUp = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-div">
      <h3>Sign up today! </h3>
      <h4 className="subheading">
        Just fill in your email, name, and password, and you'll be buying plants
        in no time!
      </h4>
      <form onSubmit={onSubmitHandler} className="signup-form">
        <label for="firstname">First Name:</label>
        <input id="firstname" type="text" placeholder="First Name" />
        <label for="lastname">Last Name:</label>
        <input id="lasttname" type="text" placeholder="Last Name" />
        <label for="email">Email:</label>
        <input type="email" placeholder="Email" />
        <label for="password">Password:</label>
        <input type="password" placeholder="Password" />
        <button className="signupbutton">Sign Up:</button>

        <p>
          Already have an account?{" "}
          <Link id="signup-signin" to="signin">
            Sign in here.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
