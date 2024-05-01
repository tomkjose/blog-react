import React, { useEffect } from "react";
import SigninCard from "../components/SigninCard/SigninCard";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Signin() {
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
