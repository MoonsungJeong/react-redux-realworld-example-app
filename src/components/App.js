import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Editor from "./Editor/Editor";
import Article from "./Article/Article";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}

export default App;
