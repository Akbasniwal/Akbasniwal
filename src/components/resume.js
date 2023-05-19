import React from "react";
import SocialApps from "./social-apps";
import "./resume.css";

function Block({ title }) {
  return <div className="block">{title}</div>;
}

export default function Resume() {
  return (
    <>
      <div>
        <div
          className="container"
          style={{ background: "#000000e0", color: "white" }}
        >
          <div className="row">
            <div className="flex-row justify-content-space-around">
              <h2>AkBasniwal</h2>
              <h3>
                <a href="https://github.com/Akbasniwal">@AkBasniwal</a>
              </h3>
            </div>
            <div>
              <p
                style={{
                  margin: "10px",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  textAlign: "center",
                }}
              >
                I am AkBasniwal,a 3rd year undergraduate student at MNIT Jaipur
                and a full stack developer,competitive coder,CyberSecurity
                Enthusiast.
              </p>
              <SocialApps />
              <center>
                <a href={"../akBasniwal.pdf"} target="_blank" rel="noreferrer">
                  <button className="download-btn">Download CV</button>
                </a>
              </center>
            </div>
            <div className="line" />
            <div className="resumebox">
              <div className="flex-column box">
                <div className="edu">
                  <Block title="Education" />
                  <ul>
                    <li>
                      <span>Matriculation - X</span>
                      <br />
                      <small>2017-2018</small>
                      <br />
                      <small>RBSE - 92%</small>
                    </li>
                    <li>
                      <span>Senior Secondary - XII</span>
                      <br />
                      <small>2019-2020</small>
                      <br />
                      <small>CBSE - 95.5%</small>
                    </li>
                    <li>
                      <span>Graduation</span>
                      <br />
                      <small>2020-2024</small>
                      <br />
                      <small>B.Tech Computer Sciecne MNIT,Jaipur</small>
                      <br />
                      <small>CGPA - 8.3</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-column box">
                <div className="edu">
                  <Block title="Skills" />
                  <ul>
                    <li>
                      <span>Programming Languages</span>
                      <br />
                      <small>
                        Python, C++, Javascript, HTML, CSS ,Java Basic
                      </small>
                    </li>
                    <li>
                      <span>Frameworks</span>
                      <br />
                      <small>React, Django, Bootstrap ,3Js</small>
                    </li>
                    <li>
                      <span>Tools</span>
                      <br />
                      <small>Git, Github, VSCode, Vercel</small>
                    </li>
                    <li>
                      <span>Database</span>
                      <br />
                      <small>MySQL, MongoDB</small>
                    </li>
                    <li>
                      <span>Cryptography</span>
                      <br />
                      <small>
                        <a
                          href="https://cryptohack.org/user/Ak_basniwal/"
                          target="_blank"
                          style={{ color: "#ffffff" }}
                        >
                          CryptoHack
                        </a>
                      </small>
                      ,
                      <small>
                        <a
                          href="https://app.hackthebox.com/profile/1414782"
                          target="_blank"
                          style={{ color: "#ffffff" }}
                        >
                          HackTheBox
                        </a>
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resumebox">
              <div className="flex-column box skill">
                <ul>
                  <li>
                    <span>Python</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>C/Cpp</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>CSS</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>Javascript</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>React</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "70%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>Django</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "60%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-column box skill">
                <ul>
                  <li>
                    <span>Bootstrap</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>MySQL </span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>Git</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>VSCode</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>HTML</span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>Assembly </span>
                    <div className="skillbar">
                      <div className="bar" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
