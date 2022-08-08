import React from "react";
import "../App.css";
import { FiLinkedin } from "react-icons/fi";
import { FaUserSecret, FaHackerrank, FaTwitter } from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
  SiInstagram,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";
import { Header } from "semantic-ui-react";
import TypeWriter from "./typewriter";

export default function Home(props) {
  return (
    <div
      className={`bg-${props.mode} text-${
        props.mode === "dark" ? "white" : "black"
      } my-5`}
      style={{
        border: `1px solid ${props.mode === "dark" ? "white" : "black"}`,
        borderRadius: "5px",
        padding: "5px",
        height: "580px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="center">
        <center>
          <h3>Profile</h3>
          <Header className="my-5" as="h2" icon textAlign="center">
            <FaUserSecret size={150} />
          </Header>
          <TypeWriter />
          <div>
            <ul className="navbar-nav d-flex flex-row justify-content-center mb-3">
              <li>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/akbasniwal2907"
                  className="p-2 hvr"
                  target="_blank"
                >
                  <FaTwitter
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://leetcode.com/Akbasniwal/"
                  className="p-2 hvr"
                  target="_blank"
                >
                  <FaLeetcode
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://www.instagram.com/ak_basniwal/"
                  target="_blank"
                >
                  <SiInstagram
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://github.com/Akbasniwal"
                  target="_blank"
                >
                  <SiGithub
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://www.codechef.com/users/a_mahakal"
                  target="_blank"
                >
                  <SiCodechef
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://www.hackerrank.com/2020ucp1821"
                  target="_blank"
                >
                  <FaHackerrank
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://codeforces.com/profile/Ak_basniwal"
                  target="_blank"
                >
                  <SiCodeforces
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://www.linkedin.com/in/ak-basniwal-b21503201/"
                  target="_blank"
                >
                  <FiLinkedin
                    color={props.mode === "dark" ? "white" : "black"}
                    size={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </center>
      </div>
    </div>
  );
}
