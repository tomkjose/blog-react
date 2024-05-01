import React, { useState } from "react";
import styles from "./SigininCard.module.css";
function SigninCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className={styles.signin} method="POST">
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
