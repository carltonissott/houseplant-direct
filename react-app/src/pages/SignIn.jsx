import { Link } from "react-router-dom";
import { userActions } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { base64urlEncodeWithoutPadding } from "@firebase/util";

const SignIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userAuth = {
      email: e.target[0].value.toLowerCase(),
      password: e.target[1].value,
    };
    const fetchUser = async (userAuth) => {
      const response = await fetch(
        "https://houseplantdirect-default-rtdb.firebaseio.com/users.json"
      );
      const users = await response.json();
      const userArray = Object.values(users);
      const foundUser = userArray.find((x) => x.email === userAuth.email);
      if (foundUser) {
        if (foundUser.password === userAuth.password) {
          console.log("success!");
          dispatch(userActions.logInUser(foundUser.firstname));
          navigate("/myaccount");
        } else {
          e.target[1].setCustomValidity("Incorrect user/ password");
          e.target[1].reportValidity();
        }
      } else {
        e.target[0].setCustomValidity("No account found with this email");
        e.target[0].reportValidity();
      }
    };
    fetchUser(userAuth);
  };

  const onChangeHandler = (e) => {
    e.target.setCustomValidity("");
  };

  return (
    <div className="signup-div">
      <h3>Sign in: </h3>
      <form onSubmit={onSubmitHandler} className="signup-form">
        <label htmlFor="email">Email:</label>
        <input
          onChange={onChangeHandler}
          id="email"
          type="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={onChangeHandler}
          id="password"
          type="password"
          placeholder="Password"
          required
        />
        <button className="signupbutton">Sign In:</button>

        <p>
          Don't have an account?{" "}
          <Link id="signup-signin" to="/signup">
            Sign up here.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
