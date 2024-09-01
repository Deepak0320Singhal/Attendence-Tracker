import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup"); // Navigate to the signup page
  };
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to the signup page
  };
  return (
    <div className="sign-in-card">
      <h2>Sign In Here</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div> */}
        <button
          type="submit"
          onClick={handleHome}
          className="btn btn-primary"
        >
          Sign In
        </button>
      </form>
      <div>
        <p>Already have an account?? </p>
        <button onClick={handleSignUp}>Signup</button>
      </div>
    </div>
  );
};

export default Signin;
