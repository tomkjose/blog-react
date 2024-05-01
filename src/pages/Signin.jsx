import React from "react";
import SigninCard from "../components/SigninCard/SigninCard";
import "../styles/auth.css";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__main__container">
          <div className="auth__title">Sign In</div>
          <SigninCard />
          <span className="auth__redirect">
            Don't have an account?{" "}
            <Link to="/signup" className="auth__Link">
              {" "}
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
