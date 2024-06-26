import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useChangeTheme } from "../../providers/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";

function Navbar() {
  const { currentTheme, changeTheme } = useChangeTheme();

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(logout());
      localStorage.removeItem("user");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={styles.navbar__container}>
      <div className={styles.Navbar}>
        <div className={styles.nav__brand}>
          <Link to="/" className={styles.nav__home__link}>
            <span className={styles.nav__icon}>B</span>LOG
          </Link>
        </div>
        {!user ? (
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
        ) : (
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
            {user.avatar ? (
              <Link to={`/user/${user.userId}`}>
                <img
                  src={
                    new URL(
                      user.avatar,
                      "https://blog-api-d30h.onrender.com/uploads"
                    )
                  }
                  alt="avatar"
                  className={styles.nav__avatar}
                />
              </Link>
            ) : (
              <Link to={`/user/${user.userId}`}>
                <img
                  src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
                  alt="avatar"
                  className={styles.nav__avatar}
                />
              </Link>
            )}
            <div className={styles.nav__auth__item} onClick={handleLogout}>
              Log out
            </div>
          </div>
        )}
      </div>
      <div
        className={styles.compact__menu}
        style={{ backgroundColor: currentTheme ? "#171717" : "white" }}
      >
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
          {!user ? (
            <Link to="/signin" className={styles.comapct__menu__link}>
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                login
              </span>
            </Link>
          ) : (
            <div>
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                logout
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
