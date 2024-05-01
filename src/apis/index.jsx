import axios from "axios";
import { API_URL } from "../utils/constants";

const authToken = JSON.parse(localStorage.getItem("token")) || "";

export const userSignin = async (email, password) => {
  const response = await axios.get(API_URL.signin(), {
    email,
    password,
  });
  const data = response.data;
  localStorage.setItem("token", JSON.stringify(data.token));
  console.log("data", data);
};

export const userSignup = async (
  username,
  email,
  password,
  confirmPassword
) => {
  const response = await axios.get(API_URL.signup(), {
    username,
    email,
    password,
    confirmPassword,
  });
  const data = response.data;
  console.log("data", data);
};

export const updateUserProfile = async (email, username, avatar) => {
  const response = await axios.post(
    API_URL.updateProfile(),
    {
      email,
      username,
      avatar,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  const data = response.data;
  console.log("data", data);
};

export const fetchAllPosts = async () => {
  const response = await axios.get(API_URL.allPosts());
  const data = response.data;
  console.log("data", data);
};

export const deletePost = async (id) => {
  const response = await axios.delete(API_URL.deletePost(id), {
    headers: {
      Authorization: `${authToken}`,
    },
  });
  const data = response.data;
  console.log("data", data);
};

export const updatePost = async (id) => {
  const response = await axios.put(API_URL.updatePost(id), {
    headers: {
      Authorization: `${authToken}`,
    },
  });
  const data = response.data;
  console.log("data", data);
};

export const createPost = async (title, body, thumbnail, author) => {
  const response = await axios.post(
    API_URL.createPost(),
    { title, body, thumbnail, author },
    {
      headers: {
        Authorization: `${authToken}`,
      },
    }
  );
  const data = response.data;
  console.log("data", data);
};
