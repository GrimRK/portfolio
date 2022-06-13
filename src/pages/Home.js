import React, { useEffect, useState } from "react";
import "./Home.css";
import Aboutme from "../components/Aboutme";
import Banner from "../components/Banner";
import ProgLang from "../components/ProgLang";
import Projects from "../components/Projects";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffectOnce, useTimeout } from "usehooks-ts";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      if (location.state && location.state.id) {
        document.getElementById(location.state.id).scrollIntoView();
        return;
      }
    }, 800);

    if (location.state && location.state.id) {
      console.log(location.state);
      return;
    }
    window.scrollTo(0, 0);
  }, [location.state]);

  const [personalInfo, setPersonalInfo] = useState();
  useEffectOnce(() => {
    onSnapshot(collection(db, "info/aman/personal_info"), (docs) => {
      docs.forEach((doc) => setPersonalInfo(doc.data()));
    });
  });
  return (
    <div className="home">
      <div id="_top"></div>
      <NavBar></NavBar>
      <div className="app_border"></div>
      <Banner></Banner>
      <div className="app_border" id="_aboutme"></div>
      <Aboutme
        aboutme={
          personalInfo
            ? personalInfo.about_me
              ? personalInfo.about_me
              : ""
            : ""
        }
      ></Aboutme>
      <div className="app_border" id="_skills"></div>
      <ProgLang></ProgLang>
      <div className="app_border" id="_projects"></div>
      <Projects className="projects"></Projects>
      <div className="app_border" id="_contactme"></div>
      <Contact></Contact>
      <div className="app_border"></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
