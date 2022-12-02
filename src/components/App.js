import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Editor from "./Editor/Editor";
import Article from "./Article/Article";

import { Routes, HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
