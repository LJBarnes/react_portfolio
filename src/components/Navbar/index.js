import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// navbar-right class not working...why?
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Leah J. Barnes
      </Link>
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/About"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Connect"
              className={window.location.pathname === "/Connect" ? "nav-link active" : "nav-link"}
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;


