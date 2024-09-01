import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/signin"); // Navigate to the signup page
  };
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to the signup page
  };
  return (
    <div className="sign-in-card">
      <h2>Create New Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name :</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name :</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email"
            required
          />
        </div>
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
        <button type="submit" onClick={handleHome} className="btn btn-primary">
          Sign In
        </button>
      </form>
      <div>
        <p>Don't have an account?? </p>
        <button onClick={handleSignIn}>Signin</button>
      </div>
    </div>
  );
};

export default Signup;
