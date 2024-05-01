import React, { useState } from "react";
import styles from "./SignupCard.module.css";
function SignupCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form className={styles.signup} method="POST">
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        className={styles.signup__input}
        required
        placeholder="Username"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        required
        className={styles.signup__input}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        required
        className={styles.signup__input}
        placeholder="Password"
      />
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        name="confirmPassword"
        required
        className={styles.signup__input}
        placeholder="Confirm password"
      />
      <button type="submit" className={styles.signup__btn}>
        {" "}
        Sign In
      </button>
    </form>
  );
}

export default SignupCard;
