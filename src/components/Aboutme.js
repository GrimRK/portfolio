import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTimeout } from "usehooks-ts";
import "../Css/Aboutme.css";
function Aboutme({ aboutme }) {
  const { ref: targetref, inView } = useInView({ threshold: 0.1 });
  const [styl, setStyl] = useState("");
  useTimeout(() => {
    setStyl("show");
  }, 700);

  const leftstl = `aboutme_left ${inView ? styl : ""}`;
  const rightstl = `aboutme_right ${inView ? styl : ""}`;
  return (
    <div className="aboutme" id="aboutme" ref={targetref}>
      <div className="aboutme_container">
        <div className={leftstl}>
          <h1 className="app_heading">About Me</h1>
        </div>
        <div className={rightstl}>
          <p className="app_text">{aboutme}</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
