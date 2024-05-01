import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useChangeTheme } from "../../providers/ThemeProvider";

function Navbar() {
  const { currentTheme, changeTheme } = useChangeTheme();
  return (
    <div className={styles.navbar__container}>
      <div className={styles.Navbar}>
        <div className={styles.nav__brand}>
          <span className={styles.nav__icon}>B</span>LOG
        </div>
        <div className={styles.nav__auth}>
          <div className={styles.nav__theme}>
            {currentTheme ? (
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer", paddingTop: "0.2rem" }}
                onClick={() => changeTheme()}
              >
                light_mode
              </span>
            ) : (
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer", paddingTop: "0.2rem" }}
                onClick={() => changeTheme()}
              >
                dark_mode
              </span>
            )}
          </div>
          <Link to="/signin" className={styles.nav__link}>
            <div className={styles.nav__auth__item}>Log In</div>
          </Link>
          <Link to="/signup" className={styles.nav__link}>
            <div className={styles.nav__auth__btn}>Sign Up</div>
          </Link>
        </div>
      </div>
      <div className={styles.compact__menu}>
        <div className={styles.compact__menu__container}>
          {" "}
          <Link to="/" className={styles.comapct__menu__link}>
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
            >
              home
            </span>
          </Link>
          <Link to="/signin" className={styles.comapct__menu__link}>
            <span
              className="material-symbols-outlined"
              style={{ cursor: "pointer" }}
            >
              login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
