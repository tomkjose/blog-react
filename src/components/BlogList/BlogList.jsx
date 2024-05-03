import React, { useEffect } from "react";
import styles from "./BlogList.module.css";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "../../redux/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../apis";
import { formatDate, truncateText } from "../../utils/helper";
import { Link } from "react-router-dom";
function BlogList() {
  const posts = useSelector((state) => state.blog.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(fetchPostsRequest());
      try {
        const response = await fetchAllPosts();
        dispatch(fetchPostsSuccess(response));
      } catch (error) {
        dispatch(fetchPostsFailure(error.message));
      }
    };
    fetchPosts();
  }, [dispatch]);
  if (posts.length === 0) {
    return <div className={styles.post__empty}>No Posts </div>;
  }
  // console.log("posts", posts);
  return (
    <div className={styles.blog__list}>
      {posts.map((post) => {
        return (
          <div key={post._id} className={styles.post__card}>
            {post && post.thumbnail ? (
              <img
                src={new URL(post.thumbnail, "http://localhost:8080/uploads")}
                alt="post thumbnail"
                className={styles.post__thumbnail}
              />
            ) : (
              <img
                src="https://messagetech.com/wp-content/themes/ml_mti/images/no-image.jpg"
                alt="post thumbnail"
                className={styles.post__thumbnail}
              />
            )}
            <div className={styles.post__user__container}>
              <img
                src={
                  new URL(post.author?.avatar, "http://localhost:8080/uploads")
                }
                alt="post user avatar"
                className={styles.post__user__avatar}
              />
              <div className={styles.post__user__details}>
                <div className={styles.post__user__name}>
                  {post.author?.username}
                </div>
                <div className={styles.post__date}>
                  {formatDate(post.createdAt)}
                </div>
              </div>
            </div>

            <p className={styles.post__title}>
              {" "}
              <Link to={`/post/${post._id}`} className={styles.post__link}>
                {post.title}{" "}
              </Link>
            </p>

            <div className={styles.post__description}>
              {truncateText(post.body)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
