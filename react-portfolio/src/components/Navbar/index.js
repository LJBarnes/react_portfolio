import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Leah J. Barnes
      </Link>
      <div>
        <ul className="navbar-nav justify-content-end">
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
              to="/Skills"
              className={window.location.pathname === "/Skills" ? "nav-link active" : "nav-link"}
            >
              Specialities
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


