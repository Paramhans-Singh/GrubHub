import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../apis/userAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import "../styles/Login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) alert("Password not matched");
    else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="login-container">
      {loading && <Loading />}
      {success && <Success message="Registration Successful" />}
      {error && <Error error="Something went wrong" />}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="inp name">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inp email">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inp password">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inp password">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <h3>
        <a href="/login">Have an account? Login here</a>
      </h3>
    </div>
  );
}

export default Register;
