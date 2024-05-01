import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoadingPage from "./pages/LoadingPage";
import { useChangeTheme } from "./providers/ThemeProvider";

const Home = React.lazy(() => import("./pages/Home"));
const Post = React.lazy(() => import("./pages/Post"));
const Signin = React.lazy(() => import("./pages/Signin"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Fof = React.lazy(() => import("./pages/Fof"));

function App() {
  const { currentTheme } = useChangeTheme();
  return (
    <div className={`App ${currentTheme ? "dark" : "Light"}`}>
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/post/:id" element={<Post />} />
            <Route exact path="/user/:id" element={<Profile />} />
            <Route path="*" element={<Fof />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
