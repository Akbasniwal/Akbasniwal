import React from "react";
import ProjectCard from "./projectCard";
import p1 from "../images/p1.gif";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p3.gif";

function Projects(props) {
  return (
    <div>
      <div className="projectcard card-group mb-3 d-flex justify-content-center">
        <ProjectCard
          title="Tic Tac Toe"
          tags={["ReactJs", "CSS"]}
          content={
            "Tic-tac-toe X's and O's is a game for two players on a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner."
          }
          link={"https://react1-delta-lake.vercel.app/"}
          code={"https://github.com/Akbasniwal/react1"}
          fig={p1}
          mode={props.mode}
        />
        <ProjectCard
          title="Password Validate"
          tags={["HTML", "CSS", "JavaScript"]}
          content={
            "Password validate is basic sign in feature for any website which tests streangth of password and checks if provided email is valid is any of the sections does not satisfy eligibility of proposed criteria."
          }
          link={"http://validate-password.vercel.app/"}
          code={"https://github.com/Akbasniwal/Validate-password"}
          fig={p2}
          mode={props.mode}
        />
        <ProjectCard
          title="Clock"
          tags={["HTML", "CSS", "JavaScript"]}
          content={
            "Basic clock with 3 heads hour,minute and second using html,css and js."
          }
          link={"https://akbasniwal.github.io/Sclock/"}
          code={"https://github.com/Akbasniwal/Sclock"}
          fig={p3}
          mode={props.mode}
        />
      </div>
    </div>
  );
}

export default Projects;
