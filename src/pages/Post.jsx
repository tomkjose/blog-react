import React, { useEffect, useState } from "react";
import "../styles/post.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../utils/helper";
import { deletePostRequest } from "../redux/actions/blogAction";
import { deletePost, fetchSinglePosts } from "../apis";

function Post() {
  const { id } = useParams();

  const user = useSelector((state) => state.user.user);
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPost = async () => {
      const currentPost = await fetchSinglePosts(id);
      setPost(currentPost);
    };
    getPost();
  }, [id]);

  const handlePostDelete = async () => {
    try {
      await dispatch(deletePostRequest(post._id));
      deletePost(post._id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="post">
      {post && post._id ? (
        <div className="post__container">
          <h1 className="post__title">{post.title}</h1>
          <div className="post__image">
            {post && post.thumbnail ? (
              <img
                src={new URL(post.thumbnail, "http://localhost:8080/uploads")}
                alt="thumbnail"
                className="post__thumbnail"
              />
            ) : (
              <img
                src="https://messagetech.com/wp-content/themes/ml_mti/images/no-image.jpg"
                alt="post thumbnail"
                className="post__thumbnail"
              />
            )}
          </div>
          <div className="post__description">{post.body}</div>
          {user && user.userId === post.author._id && (
            <div className="post__delete">
              <button className="post__delete__btn" onClick={handlePostDelete}>
                Delete
              </button>
            </div>
          )}
          <div className="post__info">
            <div className="post__info__user">
              <img
                src={
                  new URL(post.author.avatar, "http://localhost:8080/uploads")
                }
                alt="user__img"
                className="post__user__avatar"
              />
              <span className="post__user__name">{post.author.username}</span>
            </div>
            <div className="post__details">
              <span className="post__date">{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
