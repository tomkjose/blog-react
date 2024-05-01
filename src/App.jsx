import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Post = React.lazy(() => import("./pages/Post"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Fof = React.lazy(() => import("./pages/Fof"));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:id" element={<Post />} />
          <Route exact path="/user/:id" element={<Profile />} />
          <Route path="*" element={<Fof />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
