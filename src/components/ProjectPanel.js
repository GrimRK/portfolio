import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function ProjectPanel({
  project_name,
  imgurl,
  description,
  genre,
  stacks,
  actual_description,
  banner,
  imgUrls,
  projectUrls,
}) {
  const [navflag, setNavflag] = useState(false);
  const handleIt = (e) => {
    e.preventDefault();
    setNavflag(true);
  };
  return (
    <div className="projectpanel">
      {navflag && (
        <Navigate
          to="/fullproject"
          replace={true}
          state={{
            project_name: project_name,
            imgUrl: imgurl,
            actual_description: actual_description,
            stacks: stacks,
            banner: banner,
            imgUrls: imgUrls,
            projectUrls: projectUrls,
          }}
        ></Navigate>
      )}
      <div className="projectpanel_container">
        <div className="panel_border"></div>
        <div className="panel_img_container">
          <img src={banner} alt="ok" className="project_img"></img>
        </div>
        <div className="genre_container">
          <div className="genre">
            {genre ? genre.map((ele) => <p key={ele}>{ele}</p>) : ""}
          </div>
        </div>
        <div className="project_info">
          <div
            style={{ background: "#393939", height: "2px", width: "100%" }}
          ></div>
          <div className="project_title">
            <h3>{project_name}</h3>
          </div>
          <div className="project_description">
            <p>{description}</p>
          </div>
          <div
            style={{ background: "#393939", height: "2px", width: "100%" }}
          ></div>
          <div className="stack_container">
            <div className="stack_title">
              <h3>Stacks</h3>
            </div>
            <div className="stack_used">
              {stacks ? stacks.map((stack) => <p key={stack}>{stack}</p>) : ""}
            </div>
          </div>
          <div
            style={{ background: "#393939", height: "2px", width: "100%" }}
          ></div>
          <div className="project_link">
            <Button className="project_btn" onClick={handleIt}>
              <div className="project_btn_title">View Project</div>
              <KeyboardDoubleArrowRight
                className="project_btn_icon"
                fontSize="large"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPanel;
