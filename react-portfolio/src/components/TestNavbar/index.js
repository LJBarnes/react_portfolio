import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function TestNavbar() {
    return (
        <nav classNameName="navbar navbar-default navbar-fixed-top">
            <div classNameName="container">
                <div classNameName="navbar-header">
                    <button type="button" classNameName="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Leah J. Barnes</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/About"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                ABOUT
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Skills"
                                className={
                                    window.location.pathname === "/Skills" || window.location.pathname === "/Skills"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                SPECIALITIES
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Portfolio"
                                className={
                                    window.location.pathname === "/Portfolio" || window.location.pathname === "/Portfolio"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Connect"
                                className={
                                    window.location.pathname === "/Connect" || window.location.pathname === "/Connect"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                CONNECT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TestNavbar