import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useSelector } from "react-redux";
import BlogList from "../components/BlogList/BlogList";
import CreatePost from "../components/CreatePost/CreatePost";

function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {}, []);
  const user = useSelector((state) => state.user.user);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="home">
      <div className="home__container">
        {user ? (
          <div className="home__intro">
            <span className="home__message">
              Welcome <span className="home__user">{user.username}</span>
            </span>
            <button className="home__create__btn" onClick={toggleModal}>
              <span className="material-symbols-outlined add__post">add</span>
              <span className="btn__span">Create</span>
            </button>
          </div>
        ) : (
          ""
        )}
        <BlogList />
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <CreatePost />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
