import React from "react";
import "../App.css";
import { FaUserSecret } from "react-icons/fa";

import { Header } from "semantic-ui-react";
import TypeWriter from "./typewriter";
import SocialApps from "./social-apps";

export default function Home(props) {
  return (
    <div
      className={`text-${props.mode === "dark" ? "white" : "black"} mx-3 base`}
      style={{
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="center">
        <center>
          <h1>Abhishek kumar basniwal</h1>
          <Header className="my-3" as="h2" icon textAlign="center">
            <FaUserSecret size={150} />
          </Header>
          <TypeWriter />
          <SocialApps />
        </center>
      </div>
    </div>
  );
}
