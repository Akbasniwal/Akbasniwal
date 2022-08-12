import React from "react";
import "../App.css";

export default function Skill(props) {
  return (
    <div className="d-flex card-group">
      {props.skillset.map((skill) => (
        <div className="tag mx-1 my-1">{skill}</div>
      ))}
    </div>
  );
}
