import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h4> React Projects</h4>
          </div>
          <div className="col-lg-3">
            🏠<Link to="/"> Home </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
