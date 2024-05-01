const API_ROOT = "http://localhost:8080/api/v1";

export const API_URL = {
  signin: () => `${API_ROOT}/user/signin`,
  signup: () => `${API_ROOT}/user/signup`,
  updateProfile: (id) => `${API_ROOT}/user/updateProfile/${id}`,
  allPosts: () => `${API_ROOT}/blog`,
  createPost: () => `${API_ROOT}/blog/create`,
  deletePost: (id) => `${API_ROOT}/blog/delete/${id}`,
  updatePost: (id) => `${API_ROOT}/blog/update/${id}`,
};
