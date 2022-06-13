import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ProjectPanel from "../components/ProjectPanel";
import { db } from "../firebase";
import "./AllProject.css";
function AllProject() {
  const [projectsleft, setProjectsleft] = useState([]);
  const [projectsright, setProjectsright] = useState([]);
  const [mlProjectsleft, setMlProjectsleft] = useState([]);
  const [mlProjectsright, setMlProjectsright] = useState([]);
  const [devProjectsleft, setDevProjectsleft] = useState([]);
  const [devProjectsright, setDevProjectsright] = useState([]);
  const [allProjects, setAllProjects] = useState();
  function equalML(val) {
    return val === "ML";
  }
  function equalWD(val) {
    return val === "Web-Dev";
  }

  useEffectOnce(() => {
    const q = query(
      collection(db, "info/aman/projects"),
      orderBy("pid", "desc")
    );
    onSnapshot(q, (docs) => {
      const temp = [];
      docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setAllProjects(temp);
    });
  });
  function setsval() {
    if (allProjects) {
      var tl = [],
        tr = [],
        i = 0;

      allProjects.map((ele) => {
        if (ele.genre) {
          if (i % 2 === 0) {
            tl.push(ele);
          } else {
            tr.push(ele);
          }
          i++;
        }
        return 0;
      });
      setProjectsleft(tl);
      setProjectsright(tr);
      tl = [];
      tr = [];
      i = 0;
      allProjects.map((ele) => {
        if (ele.genre) {
          if (ele.genre.findIndex(equalML) !== -1) {
            if (i % 2 === 0) {
              tl.push(ele);
            } else {
              tr.push(ele);
            }
            i++;
          }
        }
        return 0;
      });
      setMlProjectsleft(tl);
      setMlProjectsright(tr);
      tl = [];
      tr = [];
      i = 0;
      allProjects.map((ele) => {
        if (ele.genre) {
          if (ele.genre.findIndex(equalWD) !== -1) {
            if (i % 2 === 0) {
              tl.push(ele);
            } else {
              tr.push(ele);
            }
            i++;
          }
        }
        return 0;
      });
      setDevProjectsleft(tl);
      setDevProjectsright(tr);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setsval();
  }, [allProjects]);

  const all_ele = document.getElementById("all");
  const webdev_ele = document.getElementById("webdev");
  const ml_ele = document.getElementById("ml");

  const all_div_ele = document.getElementById("all_projects");
  const webdev_div_ele = document.getElementById("webdev_projects");
  const ml_div_ele = document.getElementById("ml_projects");

  function handleAll() {
    all_div_ele.classList.remove("hidden");
    webdev_div_ele.classList.add("hidden");
    ml_div_ele.classList.add("hidden");

    all_ele.classList.add("activated");
    webdev_ele.classList.remove("activated");
    ml_ele.classList.remove("activated");
  }
  function handleWebdev() {
    all_div_ele.classList.add("hidden");
    webdev_div_ele.classList.remove("hidden");
    ml_div_ele.classList.add("hidden");

    all_ele.classList.remove("activated");
    webdev_ele.classList.add("activated");
    ml_ele.classList.remove("activated");
  }
  function handleMl() {
    all_div_ele.classList.add("hidden");
    webdev_div_ele.classList.add("hidden");
    ml_div_ele.classList.remove("hidden");

    all_ele.classList.remove("activated");
    webdev_ele.classList.remove("activated");
    ml_ele.classList.add("activated");
  }
  const alldivRef = useRef(null);
  const devdivRef = useRef(null);
  const mldivRef = useRef(null);
  useEventListener("click", handleAll, alldivRef);
  useEventListener("click", handleWebdev, devdivRef);
  useEventListener("click", handleMl, mldivRef);

  return (
    <div className="allprojects">
      <Navbar></Navbar>
      <div className="allprojects_container">
        <div className="allprojects_title">
          <p>
            <strong className="color_text">Projects</strong> I have done
          </p>
        </div>
        <div className="allprojects_selector_container">
          <div className="allprojects_selector">
            <div className="genre activated" id="all" ref={alldivRef}>
              All Projects
            </div>
            <div className="genre" id="webdev" ref={devdivRef}>
              Web-Dev
            </div>
            <div className="genre" id="ml" ref={mldivRef}>
              Machine Learning
            </div>
          </div>
        </div>

        <div className="div_container">
          <div className="allprojects_projects" id="all_projects">
            <div className="allprojects_left_container">
              {projectsleft.map((item) =>
                item ? (
                  <ProjectPanel
                    key={item.project_name}
                    project_name={item.project_name}
                    description={item.brief_description}
                    actual_description={item.actual_description}
                    genre={item.genre}
                    stacks={item.stacks}
                    banner={item.banner}
                    imgUrls={item.imgUrls}
                    projectUrls={item.projectUrls}
                  />
                ) : (
                  <br></br>
                )
              )}
            </div>
            <div className="allprojects_right_container">
              {projectsright.map((item) =>
                item ? (
                  <ProjectPanel
                    key={item.project_name}
                    project_name={item.project_name}
                    description={item.brief_description}
                    actual_description={item.actual_description}
                    genre={item.genre}
                    stacks={item.stacks}
                    banner={item.banner}
                    imgUrls={item.imgUrls}
                    projectUrls={item.projectUrls}
                  />
                ) : (
                  <br></br>
                )
              )}
            </div>
          </div>
          <div className="allprojects_projects hidden" id="webdev_projects">
            <div className="allprojects_left_container">
              {devProjectsleft.map((item) =>
                item ? (
                  <ProjectPanel
                    key={item.project_name}
                    project_name={item.project_name}
                    description={item.brief_description}
                    actual_description={item.actual_description}
                    genre={item.genre}
                    stacks={item.stacks}
                    banner={item.banner}
                    imgUrls={item.imgUrls}
                    projectUrls={item.projectUrls}
                  />
                ) : (
                  <br></br>
                )
              )}
            </div>
            <div className="allprojects_right_container">
              {devProjectsright.map((item) =>
                item ? (
                  <ProjectPanel
                    key={item.project_name}
                    project_name={item.project_name}
                    description={item.brief_description}
                    actual_description={item.actual_description}
                    genre={item.genre}
                    stacks={item.stacks}
                    banner={item.banner}
                    imgUrls={item.imgUrls}
                    projectUrls={item.projectUrls}
                  />
                ) : (
                  <br></br>
                )
              )}
            </div>
          </div>
          <div className="allprojects_projects hidden" id="ml_projects">
            <div className="allprojects_left_container">
              {mlProjectsleft.map((item) =>
                item ? (
                  <ProjectPanel
                    key={item.project_name}
                    project_name={item.project_name}
                    description={item.brief_description}
                    actual_description={item.actual_description}
                    genre={item.genre}
                    stacks={item.stacks}
                    banner={item.banner}
                    imgUrls={item.imgUrls}
                    projectUrls={item.projectUrls}
                  />
                ) : (
                  <br></br>
                )
              )}
            </div>
            <div className="allprojects_right_container">
              {mlProjectsright.map((item) =>
                item ? (
                  <ProjectPanel
                    key={item.project_name}
                    project_name={item.project_name}
                    description={item.brief_description}
                    actual_description={item.actual_description}
                    genre={item.genre}
                    stacks={item.stacks}
                    banner={item.banner}
                    imgUrls={item.imgUrls}
                    projectUrls={item.projectUrls}
                  />
                ) : (
                  <br></br>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProject;
