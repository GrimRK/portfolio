import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import logo from "../images/navlogo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Link className="navbar-brand navbar-logo navlogo_container" to="/home">
        <div className="logo_container">
          <img className="navlogo" src={logo} alt=""></img>
          <div className="navtitle">GrimRK</div>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuRoundedIcon fontSize="large" className="menu_icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item">
            <Link
              className="nav-link navlink navhov"
              to="/home"
              state={{ id: "_aboutme" }}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link navlink navhov"
              to="/home"
              state={{ id: "_skills" }}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link navlink navhov"
              to="/home"
              state={{ id: "_projects" }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link navlink navbtn"
              to="/home"
              state={{ id: "_contactme" }}
            >
              <div>Contact Me</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
