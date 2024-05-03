import React, { useState } from "react";
import styles from "./ProfileForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/userAction";
import { updateUserProfile } from "../../apis";

function ProfileForm() {
  const user = useSelector((state) => state.user.user);
  const currentUserID = user.userId;
  const dispatch = useDispatch();

  const [avatarFile, setAvatarFile] = useState(null);

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    avatar: user.avatar,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setAvatarFile(e.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("avatar", avatarFile);

    try {
      const response = await updateUserProfile(formDataToSend, currentUserID);
      let localUpdatedUser = JSON.parse(localStorage.getItem("user")) || {};
      localUpdatedUser.email = response.email;
      localUpdatedUser.username = response.username;
      localUpdatedUser.avatar = response.avatar;
      localStorage.setItem("user", JSON.stringify(localUpdatedUser));
      dispatch(updateUser(response));
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <form
      className={styles.profile__form}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className={styles.form__group}>
        <label htmlFor="avatar">Avatar:</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          className={styles.form__input}
          onChange={handleChange}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          className={styles.form__input}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.update__btn}>
        Update
      </button>
    </form>
  );
}

export default ProfileForm;
