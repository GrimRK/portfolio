import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ProjectPanel from "./ProjectPanel";
import "../Css/Projects.css";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffectOnce } from "usehooks-ts";
import { useInView } from "react-intersection-observer";
function Projects() {
  const [selectedleft, setSelectedleft] = useState();
  const [selectedright, setSelectedright] = useState();
  const [allProjects, setAllProjects] = useState();

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
  useEffect(() => {
    var tl = [],
      tr = [];
    if (allProjects) {
      allProjects.map((ele, i) =>
        i < 4 ? (i % 2 === 0 ? tl.push(ele) : tr.push(ele)) : console.log("not")
      );
      setSelectedleft(tl);
      setSelectedright(tr);
    }
  }, [allProjects]);

  const [navigate, setNavigate] = useState(false);
  const { ref: targetref, inView } = useInView({ threshold: 0.1 });

  const leftstl = `projects_container_left ${inView ? "show" : ""}`;
  const rightstl = `projects_container_right ${inView ? "show" : ""}`;
  return (
    <div className="projects">
      {/* {console.log(allProjects, selectedleft, selectedright)} */}
      {navigate && <Navigate to="/allprojects" replace={true} />}
      <div className="projects_container" id="projects" ref={targetref}>
        <div className={leftstl}>
          <div className="projects_text_box">
            <h3 className="app_heading">Selected Projects</h3>
            <p>Here are some of my projects.</p>
          </div>
          {selectedleft
            ? selectedleft.map((ele) => (
                <ProjectPanel
                  key={ele.project_name}
                  project_name={ele.project_name}
                  description={ele.brief_description}
                  genre={ele.genre}
                  stacks={ele.stacks}
                  actual_description={ele.actual_description}
                  banner={ele.banner}
                  imgUrls={ele.imgUrls}
                  projectUrls={ele.projectUrls}
                ></ProjectPanel>
              ))
            : console.log("done")}
        </div>
        <div className={rightstl}>
          {selectedright
            ? selectedright.map((ele) => (
                <ProjectPanel
                  key={ele.project_name}
                  project_name={ele.project_name}
                  description={ele.brief_description}
                  genre={ele.genre}
                  stacks={ele.stacks}
                  actual_description={ele.actual_description}
                  banner={ele.banner}
                  imgUrls={ele.imgUrls}
                  projectUrls={ele.projectUrls}
                ></ProjectPanel>
              ))
            : console.log("done")}
          <div className="all_project_link">
            <Button
              className="all_project_btn"
              onClick={() => {
                setNavigate(true);
              }}
            >
              <div className="all_project_btn_title">View all projects</div>
              <KeyboardDoubleArrowRight
                className="all_project_btn_icon"
                fontSize="large"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
