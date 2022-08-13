import React from "react";
import "../App.css";

export default function Skill(props) {
  return (
    <div className="d-flex sec">
      {props.skillset.map((skill) => (
        <div className="tag mb-1 mx-1 my-1">
          {skill}
          <br></br>
        </div>
      ))}
    </div>
  );
}
