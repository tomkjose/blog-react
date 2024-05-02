import axios from "axios";
import { API_URL } from "../utils/constants";

const authToken = JSON.parse(localStorage.getItem("token")) || "";

export const userSignin = async (email, password) => {
  const response = await axios.post(API_URL.signin(), {
    email,
    password,
  });
  const data = response.data;
  localStorage.setItem("token", JSON.stringify(data.token));
  // console.log("data", data);
  return data;
};

export const userSignup = async (
  username,
  email,
  password,
  confirmPassword
) => {
  const response = await axios.post(API_URL.signup(), {
    username,
    email,
    password,
    confirmPassword,
  });
  const data = response.data;
  return data;
};

export const updateUserProfile = async (formData, id) => {
  console.log("id", formData);
  const response = await axios.put(API_URL.updateProfile(id), formData, {
    headers: {
      Authorization: `${authToken}`,
    },
  });
  console.log("response", response);
  const data = response.data;
  console.log("data", data);
};

export const fetchAllPosts = async () => {
  const response = await axios.get(API_URL.allPosts());
  const data = response.data;
  return data;
  // console.log("data", data);
};

export const deletePost = async (id) => {
  const response = await axios.delete(API_URL.deletePost(id), {
    headers: {
      Authorization: `${authToken}`,
    },
  });
  const data = response.data;
  console.log("data", data);
  return data;
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

export const createPost = async (formData) => {
  console.log("authToken", authToken);
  const response = await axios.post(API_URL.createPost(), formData, {
    headers: {
      Authorization: `${authToken}`,
    },
  });
  const data = response.data;
  console.log("data", data);
  return data;
};
