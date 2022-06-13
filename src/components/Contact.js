import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Navigate } from "react-router-dom";
import "../Css/Contactme.css";

function Contact() {
  const [navigate, setNavigate] = useState(false);

  const handleIt = (e) => {
    e.preventDefault();
    setNavigate(true);
  };

  const { ref: targetref, inView } = useInView({ threshold: 0.1 });
  const show = "show";
  return (
    <div className="home_contact">
      {navigate && <Navigate to="/contactme" replace={true} />}

      <div className="home_contact_container" id="contactme" ref={targetref}>
        <div className={`home_contact_title ${inView ? show : ""}`}>
          <h1>Want to discuss Something?</h1>
          <div className="home_contact_title_v2">
            <p>
              Let's go over <strong className="color_text">IT</strong>
            </p>
          </div>
        </div>
        <div className={`contact_me_link ${inView ? show : ""}`}>
          <Button className="contact_btn" onClick={handleIt}>
            <div className="contact_btn_title">Contact Me</div>
            <KeyboardDoubleArrowRight
              className="contact_btn_icon"
              fontSize="large"
            ></KeyboardDoubleArrowRight>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
