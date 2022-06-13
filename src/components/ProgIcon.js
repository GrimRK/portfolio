import React from "react";
function ProgIcon({ lname, url }) {
  return (
    <div className="progicon">
      <div className="progicon_container">
        <div className="progicon_bg"></div>
        <img className="progicon_icon" src={url} alt={lname}></img>
      </div>
      <div className="progicon_icon_name">
        <center>
          <h3>{lname}</h3>
        </center>
      </div>
    </div>
  );
}
export default ProgIcon;
