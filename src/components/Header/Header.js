import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
