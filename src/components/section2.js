import React from "react";
import Projects from "./projects";

function Section2(props) {
  return (
    <div
      style={{
        borderTop: `2px ${props.mode === "dark" ? "white" : "black"} solid`,
        paddingTop: "20px",
      }}
    >
      <ul
        className={`nav container nav-${props.mode} nav-tabs`}
        id="myTab"
        role="tablist"
      >
        <li className={`nav-item`} role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Projects
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
      </ul>
      <div
        className={`tab-content container text-${
          props.mode === "dark" ? "white" : "black"
        }`}
        id="myTabContent"
      >
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <Projects mode={props.mode} />
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            temporibus minus optio error nesciunt deserunt quasi, iure sequi,
            ipsum dolore blanditiis. Natus, optio? Aliquam eos fuga, asperiores
            tempora laborum aliquid.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
