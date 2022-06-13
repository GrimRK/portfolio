import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../Css/Banner.css";
import author from "../images/me.jpg";
import Typer from "react-typing-effect";
import { useInView } from "react-intersection-observer";
import { useTimeout } from "usehooks-ts";

function Banner() {
  const { ref: targetref, inView } = useInView({ threshold: 0.2 });

  const particlesInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const [styl, setStyl] = useState("");
  useTimeout(() => {
    setStyl("show");
  }, 700);

  const speed = parseInt("80");
  const delay = parseInt("300");
  return (
    <div className="banner_container">
      <Particles
        id="tsparticles"
        className="particle_canvas"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 70,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1600,
              },
              value: 40,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="banner_title" ref={targetref}>
        <div className={`banner_title_left ${inView ? styl : ""}`}>
          <div className="banner_profile_img_bg"></div>
          <img className="banner_profile_img" src={author} alt="Aman"></img>
        </div>
        <div className={`banner_title_right ${inView ? styl : ""}`}>
          <h1 className="banner_title_name">Aman Kumar</h1>
          <div className="typer_container">
            <Typer
              className="banner_typer"
              text={["Web Developer"]}
              cursorRenderer={(cursor) => <h2>{cursor}</h2>}
              speed={speed}
              eraseSpeed={speed}
              eraseDelay={delay}
              typingDelay={delay}
              displayTextRenderer={(text, i) => {
                return (
                  <h2>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span key={key} style={{ color: "white" }}>
                          {char}
                        </span>
                      );
                    })}
                  </h2>
                );
              }}
            ></Typer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
