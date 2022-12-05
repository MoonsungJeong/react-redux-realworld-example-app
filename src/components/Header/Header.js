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
            <a className="nav-link" href="/">
              <i className="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Sign in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
