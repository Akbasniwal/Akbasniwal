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
                    size={window.innerWidth < 500 ? 20 : 30}
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
                  <SiLeetcode
                    color={props.mode === "dark" ? "white" : "black"}
                    size={window.innerWidth < 500 ? 20 : 30}
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
                    size={window.innerWidth < 500 ? 20 : 30}
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
                    size={window.innerWidth < 500 ? 20 : 30}
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
                    size={window.innerWidth < 500 ? 20 : 30}
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
                    size={window.innerWidth < 500 ? 20 : 30}
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
                    size={window.innerWidth < 500 ? 20 : 30}
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
                    size={window.innerWidth < 500 ? 20 : 30}
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
