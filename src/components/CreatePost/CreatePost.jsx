import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostFailure,
  createPostRequest,
  createPostSuccess,
} from "../../redux/actions/blogAction";
import { createPost } from "../../apis";

function CreatePost() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: null,
    body: "",
    author: user.userId,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();

    for (const key in formData) {
      postData.append(key, formData[key]);
    }
    dispatch(createPostRequest(postData));
    try {
      console.log("object", postData);
      const newPost = await createPost(postData);
      dispatch(createPostSuccess(newPost));
    } catch (error) {
      dispatch(createPostFailure(error.message));
    }
  };

  return (
    <form
      className={styles.create__form}
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className={styles.create__form__input}
        onChange={handleInputChange}
      />
      <input
        type="file"
        name="thumbnail"
        className={styles.create__form__input}
        onChange={handleInputChange}
      />
      <textarea
        name="body"
        placeholder="Body"
        className={styles.create__form__textarea}
        onChange={handleInputChange}
      ></textarea>
      <input type="hidden" name="author" value={user.userId} />
      <button type="submit" className={styles.create__form__btn}>
        Post
      </button>
    </form>
  );
}

export default CreatePost;
