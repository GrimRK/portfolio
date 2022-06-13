import React, { useEffect, useState } from "react";
import ProgIcon from "./ProgIcon";
import { db } from "../firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import "../Css/Skills.css";
import { useInView } from "react-intersection-observer";
function ProgLang() {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "info/aman/skill"), (docs) => {
      const temp = [];
      docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setIcons(temp);
    });
    return () => {
      unsub();
    };
  }, []);

  const { ref: targetref, inView } = useInView({ threshold: 0.15 });
  return (
    <div className="proglang">
      <div className="prolang_container" id="skills" ref={targetref}>
        <div className={`proglang_heading  ${inView ? "show" : ""}`}>
          <h1 className={`app_heading`}>Skills</h1>
        </div>
        {}

        <div className={`proglang_icon_container ${inView ? "show" : ""}`}>
          {icons.map((icon) => {
            // console.log(icons);
            return (
              <ProgIcon key={icon.name} lname={icon.name} url={icon.url} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgLang;
