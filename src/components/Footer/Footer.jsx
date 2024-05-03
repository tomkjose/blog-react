import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>Copyright © 2024 Blog.io</p>
    </div>
  );
}

export default Footer;
