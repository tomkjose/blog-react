import React from "react";
import SignupCard from "../components/SignupCard/SignupCard";
import "../styles/auth.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__main__container">
          <div className="auth__title">Sign Up</div>
          <SignupCard />
          <span className="auth__redirect">
            Have an account?{" "}
            <Link to="/signin" className="auth__Link">
              {" "}
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
