import React from "react";
import { BsFileArrowDownFill } from "react-icons/bs";
import "../App.css";
import Skill from "./skills";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiGithub, SiLeetcode } from "react-icons/si";

function Resume(props) {
  return (
    <div
      className={`container text-${
        props.mode === "dark" ? "white" : "black"
      } my-3 d-flex justify-content-center card-group grp`}
    >
      <div className="d-flex section my-3 mx-2">
        <div className="circle"></div>
        <div
          className="top mx-2"
          style={{
            zIndex: "10",
            borderLeft: `2px solid grey`,
            paddingLeft: "20px",
          }}
        >
          <h4 className="line">Resume</h4>
          <div className="content">
            <h2 style={{ fontWeight: "bolder" }}>CHECK MY RESUME</h2>
            <a href="../akbasniwal.pdf">
              <BsFileArrowDownFill color="green" size={50} />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex section my-3 mx-2">
        <div className="circle"></div>
        <span
          className="top mx-2"
          style={{
            zIndex: 10,
            borderLeft: `2px solid grey`,
            paddingLeft: "20px",
          }}
        >
          <h4 className="line">Examinations</h4>
          <div className="content">
            <h4>Jee Mains</h4>
            <div className="tag my-1">2020</div>
            <div className="tag my-1">AIR - 5428</div>
            <div className="tag my-1">Percentile- 99.52</div>
          </div>
        </span>
      </div>
      <div className="d-flex section my-3 mx-2">
        <div className="circle"></div>
        <span
          className="top mx-2"
          style={{
            zIndex: 10,
            borderLeft: `2px solid grey`,
            paddingLeft: "20px",
          }}
        >
          <h4 className="line">Skills</h4>
          <div className="content">
            <h5>Languages</h5>
            <Skill
              skillset={[
                "JavaScript",
                "Cpp",
                "Python",
                "Scheme",
                "HTML",
                "CSS",
              ]}
            />
            <h5>Platforms</h5>
            <Skill skillset={["Unix", "git", "vercel", "linux", "windows"]} />
            <h5>Frameworks</h5>
            <Skill skillset={["ReactJs","Tkinter","Django","NodeJs"]} />
            <h5>Database</h5>
            <Skill skillset={["MySql","PL Sql"]} />
          </div>
        </span>
      </div>
      <div className="d-flex section my-3 mx-2">
        <div className="circle"></div>
        <span
          className="top mx-2"
          style={{
            zIndex: 10,
            borderLeft: `2px solid grey`,
            paddingLeft: "20px",
          }}
        >
          <h4 className="line">Education</h4>
          <div className="content">
            <h4>B.tech Computer-science</h4>
            <div className="tag">2020-present</div>
            Malviya National institute of technology, Jaipur
            <br />
            CGPA-8.37
            <br />
            <br />
            <h4>Senior Secondary (XII)</h4>
            <div className="tag">2019-20</div>
            Govt. boys Sr. Sec. School No.2,Uttam nagar,New delhi
            <br />
            Percentage - 95.5%
            <br />
            <br />
            <h4>Matriculation (X)</h4>
            <div className="tag">2017-18</div>
            Saraswati Sr. Sec. School ,Hathideh,sikar,Rajasthan
            <br />
            Percentage - 92%
          </div>
        </span>
      </div>
      <div className="d-flex section my-3 mx-2">
        <div className="circle"></div>
        <span
          className="top mx-2"
          style={{
            zIndex: 10,
            borderLeft: `2px solid grey`,
            paddingLeft: "20px",
          }}
        >
          <h4 className="line">Coding_Profiles</h4>
          <div className="content">
            <ul className="navbar-nav mb-3 my-2">
              <li className="my-2">
                <a
                  rel="noreferrer"
                  href="https://leetcode.com/Akbasniwal/"
                  className="p-2 hvr"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="h5 mx-3"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Leetcode
                  </span>
                  <SiLeetcode
                    color={props.mode === "dark" ? "white" : "black"}
                    size={window.innerWidth < 500 ? 20 : 30}
                  />
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://github.com/Akbasniwal"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="h5 mx-3"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Github
                  </span>
                  <SiGithub
                    color={props.mode === "dark" ? "white" : "black"}
                    size={window.innerWidth < 500 ? 20 : 30}
                  />
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://www.codechef.com/users/a_mahakal"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="h5 mx-3"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Codechef
                  </span>
                  <SiCodechef
                    color={props.mode === "dark" ? "white" : "black"}
                    size={window.innerWidth < 500 ? 20 : 30}
                  />
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://www.hackerrank.com/2020ucp1821"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="h5 mx-3"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    HackerRank
                  </span>
                  <FaHackerrank
                    color={props.mode === "dark" ? "white" : "black"}
                    size={window.innerWidth < 500 ? 20 : 30}
                  />
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="p-2 hvr"
                  href="https://codeforces.com/profile/Ak_basniwal"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="h5 mx-3"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Codeforces
                  </span>
                  <SiCodeforces
                    color={props.mode === "dark" ? "white" : "black"}
                    size={window.innerWidth < 500 ? 20 : 30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div className="d-flex section my-3 mx-2">
        <div className="circle"></div>
        <span
          className="top mx-2"
          style={{
            zIndex: 10,
            borderLeft: `2px solid grey`,
            paddingLeft: "20px",
          }}
        >
          <h4 className="line">Summary</h4>
          <div className="content">
            I am Abhishek kumar basniwal and I'm frontend devloper,competitve
            coder currently persuing my b.tech degree from mnit jaipur.
            <ul style={{ listStyle: "square" }}>
              <li className="tag my-2">MNIT S.ID - 2020UCP1821</li>
              <li className="tag my-2">
                VPO Ajmeri, Sikar ,Rajasthan,India(332707)
              </li>
              <li className="tag my-2">+91 9910571108</li>
              <li className="tag my-2">akbasniwal2907@gmail.com</li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Resume;
