import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Editor from "./Editor/Editor";
import Article from "./Article/Article";

import { Routes, Navigate, Route, Link } from "react-router-dom";

function App() {
  window.location.hash = "#/";
  return (
    <div className="App">
      <Header />
      <Link to="/">home</Link>
      <Link to="/Signup">signup</Link>
      <Link to="/Settings">settings</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
