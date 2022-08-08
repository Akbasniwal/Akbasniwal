import React from "react";

export default function ProjectCard(props) {
  return (
    <div
      className={`card mb-3 my-3 mx-3`}
      style={{
        minWidth: "350px",
        maxWidth: "450px",
        backgroundColor: props.mode === "dark" ? "black" : "white",
      }}
    >
      <img
        src={props.fig}
        style={{ minWidth: "300px", maxWidth: "450px" }}
        className="img-fluid rounded-start"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a
          href={props.link}
          className="btn btn-primary mx-3"
          tabIndex="1"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to project
        </a>
        <a
          href={props.code}
          className="btn btn-primary mx-3"
          tabIndex="1"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>
      </div>
    </div>
  );
}
