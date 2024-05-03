import React, { useEffect } from "react";
import "../styles/profile.css";
import { useSelector } from "react-redux";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  if (!user) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="profile">
      {user.userId !== "" && user.userId === id ? (
        <div className="profile__info">
          {user.avatar ? (
            <img
              src={
                new URL(
                  user.avatar,
                  "https://blog-api-d30h.onrender.com/uploads"
                )
              }
              alt="avatar"
              className="profile__avatar"
            />
          ) : (
            <img
              src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png"
              alt="avatar"
              className="profile__avatar"
            />
          )}
          <ProfileForm />
        </div>
      ) : (
        <div className="profile__info">
          {user.avatar ? (
            <img
              src={
                new URL(
                  user.avatar,
                  "https://blog-api-d30h.onrender.com/uploads"
                )
              }
              alt="avatar"
              className="profile__avatar"
            />
          ) : (
            <img
              src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png"
              alt="avatar"
              className="profile__avatar"
            />
          )}
          <p className="profile__username">{user.username}</p>
          <p className="profile__email">{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
