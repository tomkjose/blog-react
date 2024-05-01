import React, { useEffect } from "react";
import SignupCard from "../components/SignupCard/SignupCard";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Signup() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
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
