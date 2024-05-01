import React, { useState } from "react";
import styles from "./SigininCard.module.css";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../redux/actions/userAction";
import { userSignin } from "../../apis";

function SigninCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    try {
      const userData = await userSignin(email, password);
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch(loginSuccess(userData));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <form className={styles.signin} method="POST" onSubmit={handleSignin}>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        required
        className={styles.signin__input}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        required
        className={styles.signin__input}
        placeholder="Password"
      />

      <button type="submit" className={styles.signin__btn}>
        {" "}
        Sign In
      </button>
    </form>
  );
}

export default SigninCard;
