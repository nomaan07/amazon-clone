import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUserDetails } from "../store/actions/login/loginAction";
import "./Login.css";
function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    if (email === "noman@gmail.com" && password === "Test@123") {
      const userDetails = {
        email: "noman@gmail.com",
        password: "Test@123",
        tocken: "tetlkakslasmaslakslkaslksdsddsdw",
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(JSON.parse(localStorage.getItem("user"))));
      history.push("/");
    } else {
      alert("Invalid Email and Password");
    }
  };
  const login = () => {};
  return (
    <div className="login">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={onSubmitHandeler}>
          <h5>E-mail</h5>
          <input
            value={email}
            placeholder="Enter the Email-Id"
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>password</h5>
          <input
            value={password}
            placeholder="Enter The Password"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            onChange={login}
            type="submit"
            className="login__signinButton"
          >
            Sign in
          </button>
        </form>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button type="submit" className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
