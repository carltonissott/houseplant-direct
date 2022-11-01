import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };
    console.log(user);
    const addUser = async (user) => {
      const response = await fetch(
        "https://houseplantdirect-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    addUser(user);
    navigate("/");
  };

  return (
    <div className="signup-div">
      <h3>Sign up today! </h3>
      <h4 className="subheading">
        Just fill in your email, name, and password, and you'll be buying plants
        in no time!
      </h4>
      <form onSubmit={onSubmitHandler} className="signup-form">
        <label htmlFor="firstname">First Name:</label>
        <input id="firstname" type="text" placeholder="First Name" required />
        <label htmlFor="lastname">Last Name:</label>
        <input id="lasttname" type="text" placeholder="Last Name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" required />
        <button className="signupbutton">Sign Up:</button>

        <p>
          Already have an account?{" "}
          <Link id="signup-signin" to="/signin">
            Sign in here.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
