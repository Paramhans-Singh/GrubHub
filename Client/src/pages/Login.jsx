import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../apis/userAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading, success } = loginState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <div className="login-container">
      {loading && <Loading />}
      {success && <Success message="Login Successful" />}
      {error && <Error error="Invalid Credentials" />}

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <h3>
        <a href="/register">Not signed up? Register here</a>
      </h3>
    </div>
  );
}

export default Login;
