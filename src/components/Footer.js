import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../Css/Footer.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
function Footer() {
  const { ref: targetref, inView } = useInView({ threshold: 0.15 });
  return (
    <div className="footer">
      <div className="footer_container" ref={targetref}>
        <div className={`footer_left_container ${inView ? "show" : ""}`}></div>
        <div className={`footer_right_container `}>
          <div className={`footer_navigator ${inView ? "show" : ""}`}>
            <div className="footer_heading">
              <h4>Pages</h4>
            </div>
            <div className="footer_text">
              <Link className="footer_link" to="/home" state={{ id: "_top" }}>
                Home
              </Link>
              <Link
                className="footer_link"
                to="/home"
                state={{ id: "_aboutme" }}
              >
                About Me
              </Link>
              <Link
                className="footer_link"
                to="/home"
                state={{ id: "_skills" }}
              >
                Skills
              </Link>
              <Link
                className="footer_link"
                to="/home"
                state={{ id: "_projects" }}
              >
                Projects
              </Link>
              <Link
                className="footer_link"
                to="/home"
                state={{ id: "_contactme" }}
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className={`footer_socials ${inView ? "show" : ""}`}>
            <div className="footer_heading">
              <h4>Socials</h4>
            </div>
            <div className="footer_text">
              <Link
                className="footer_link"
                to=""
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aman-kumar-50019b19a/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon
                  className="social_icon"
                  fontSize="medium"
                ></LinkedInIcon>
                LinkedIn
              </Link>
              <Link
                className="footer_link"
                to=""
                onClick={() =>
                  window.open("https://github.com/GrimRK", "_blank")
                }
              >
                <GitHubIcon
                  className="social_icon"
                  fontSize="medium"
                ></GitHubIcon>
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <CopyrightIcon fontSize="inherit"></CopyrightIcon>2022 Aman Kumar
      </div>
    </div>
  );
}

export default Footer;
