import { Input, Button, Alert, Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import DescriptionIcon from "@mui/icons-material/Description";
import "./Contact.css";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [subject, setSubject] = useState("");
  const { ref: targetref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendMail() {
    if (fullname === "" || email === "" || desc === "" || subject === "") {
      setMessage("Some fields are incomplete.");
      setErrOpen(true);
      return;
    }

    var params = {
      name: fullname,
      email: email,
      description: desc,
      subject: subject,
    };

    emailjs
      .send("service_ID", "template_port", params, "user_c5bnoYqe8DPmalGnK3YGS")
      .then(
        (response) => {
          setMessage("Success! Mail has been sent.");
          setSuccOpen(true);
        },
        (err) => {
          setMessage("Failure! Unknown error occured, Please try again later.");
          setErrOpen(true);
        }
      );

    setFullname("");
    setEmail("");
    setDesc("");
    setSubject("");
  }
  const [message, setMessage] = useState("");
  const [errOpen, setErrOpen] = useState(false);
  const [succOpen, setSuccOpen] = useState(false);
  return (
    <div className="contact">
      <Navbar></Navbar>
      <Collapse in={errOpen}>
        <Alert
          severity="error"
          onClick={() => {
            setErrOpen(false);
          }}
        >
          {message}
        </Alert>
      </Collapse>

      <Collapse in={succOpen}>
        <Alert
          severity="success"
          onClick={() => {
            setSuccOpen(false);
          }}
        >
          {message}
        </Alert>
      </Collapse>

      <div className="app_border"></div>
      <div className="contact_container" ref={targetref}>
        <div className={`contact_left_container `}>
          <div className={`contact_title ${inView ? "show" : ""}`}>
            <h1>
              Want to discuss Something? Let's go over{" "}
              <strong className="color_text">IT</strong>
            </h1>
          </div>
          <div className={`contact_description ${inView ? "show" : ""}`}>
            <p>
              Got something to work on and looking for a collab? Reach out
              through the form and I will get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="contact_right_container">
          <div className={`contact_form_container ${inView ? "show" : ""}`}>
            <p className="contact_form_title">FILL THE FORM BELOW:</p>
            <div className="contact_input_div">
              <PersonIcon className="contact_icon" fontSize="large" />
              <Input
                className="contact_input_text"
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              ></Input>
            </div>
            <div className="contact_input_div">
              <EmailIcon className="contact_icon" fontSize="large"></EmailIcon>
              <Input
                className="contact_input_text"
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </div>
            <div className="contact_input_div">
              <SubjectIcon
                className="contact_icon"
                fontSize="large"
              ></SubjectIcon>
              <Input
                className="contact_input_text"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              ></Input>
            </div>
            <div className="contact_input_div">
              <DescriptionIcon
                className="contact_icon"
                fontSize="large"
              ></DescriptionIcon>
              <Input
                className="contact_input_text"
                placeholder="Description"
                value={desc}
                type="text"
                multiline={true}
                minRows={4}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></Input>
            </div>
            <div className="contact_btn_container">
              <Button className="contact_submit_btn" onClick={sendMail}>
                <div className="btn_title">Submit</div>

                <KeyboardDoubleArrowRight
                  className="right_icon"
                  fontSize="large"
                ></KeyboardDoubleArrowRight>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="app_border"></div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
