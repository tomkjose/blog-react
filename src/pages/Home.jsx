import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useSelector } from "react-redux";
function Home() {
  useEffect(() => {}, []);
  const user = useSelector((state) => state.user.user);

  return <div></div>;
}

export default Home;
