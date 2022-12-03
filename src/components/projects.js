import React from "react";
import ProjectCard from "./projectCard";
import p1 from "../images/pmanage.png";
import p2 from "../images/p2.png";
import p3 from "../images/doctapp.png";

function Projects(props) {
  return (
    <div>
      <div className="projectcard card-group mb-3 d-flex justify-content-center">
        <ProjectCard
          title="Project Management System"
          tags={["ReactJs", "CSS"]}
          content={
            "The goal of this project is to provide a user-friendly web solution that will aid in the administration and compilation of work for a wide range of project management users.           Businesses may manage their projects by dividing them up into smaller tasks that can be given to individuals and tracked in real-time"
          }
          link={null}
          code={"https://github.com/Penzoid/Project-Management-DBMS"}
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
          title="DoctApp"
          tags={["HTML", "CSS", "JavaScript", "Django", "Database"]}
          content={
            "Online Application for booking appointments for patients by searching appropriate doctor in list according to thier specialization of doctors."
          }
          link={null}
          code={"https://github.com/Akbasniwal/DoctApp"}
          fig={p3}
          mode={props.mode}
        />
      </div>
    </div>
  );
}

export default Projects;
