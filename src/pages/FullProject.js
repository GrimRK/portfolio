import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./FullProject.css";
//import banner from "../images/Banner.jpg";
import Footer from "../components/Footer";
import { Navigate, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

function FullProject() {
  const location = useLocation();
  const {
    actual_description,
    project_name,
    stacks,
    imgUrls,
    banner,
    projectUrls,
  } = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [navigate, setNavigate] = useState(false);

  return (
    <>
      {navigate && <Navigate to="/allprojects" replace={true} />}
      <Navbar></Navbar>
      <div className="fullproject">
        <div className="fullproject_container">
          <div className="fullproject_img_container">
            <img className="fullproject_img" src={banner} alt=""></img>
          </div>
          <div className="fullproject_title">
            <h1>{project_name}</h1>
          </div>
          <div className="fullproject_description">
            {actual_description
              ? actual_description.paragraphs
                ? actual_description.paragraphs.map((item, i) => (
                    <div key={i} className="paragraph">
                      {item.title ? (
                        <h4 className="fullproject_heading">{item.title}</h4>
                      ) : (
                        ""
                      )}
                      {item.content ? (
                        <p className="fullproject_content">{item.content}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  ))
                : ""
              : ""}

            <div className="fullproject_stacks">
              <div className="fullproject_heading">Stacks</div>
              <div className="fullproject_stack_used">
                {stacks ? stacks.map((item, i) => <p key={i}>{item}</p>) : ""}
              </div>
            </div>
            <div className="carousel_container">
              <Carousel>
                {imgUrls
                  ? imgUrls.map((ele, i) => (
                      <div key={i} className="img_carousel">
                        <img
                          className="img_carousel_img"
                          src={ele}
                          alt={i}
                        ></img>
                      </div>
                    ))
                  : ""}
              </Carousel>
            </div>
            <div className="link_btn_container">
              {projectUrls
                ? projectUrls.map((item, i) => (
                    <Button
                      key={i}
                      className="link_btn"
                      onClick={() => {
                        return window.open(item.url, "_blank");
                      }}
                    >
                      <div className="btn_title">{item.name}</div>

                      <KeyboardDoubleArrowRight
                        className="right_icon"
                        fontSize="inherit"
                      ></KeyboardDoubleArrowRight>
                    </Button>
                  ))
                : ""}
            </div>
            <div className="link_btn_container">
              <Button
                className="link_btn"
                onClick={() => {
                  setNavigate(true);
                }}
              >
                <div className="btn_title">Other Projects</div>
                <KeyboardDoubleArrowRight
                  className="right_icon"
                  fontSize="inherit"
                ></KeyboardDoubleArrowRight>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FullProject;
