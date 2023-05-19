import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaHackerrank, FaTwitter } from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
  SiGithub,
  SiLeetcode,
  SiHackthebox,
} from "react-icons/si";

const AppList = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/akbasniwal/",
    icon: <FiLinkedin color="white" size={25} />,
  },
  {
    title: "HackerRank",
    link: "https://www.hackerrank.com/akbasniwal",
    icon: <FaHackerrank color="white" size={25} />,
  },
  {
    title: "CodeChef",
    link: "https://www.codechef.com/users/akbasniwal",
    icon: <SiCodechef color="white" size={25} />,
  },
  {
    title: "CodeForces",
    link: "https://codeforces.com/profile/akbasniwal",
    icon: <SiCodeforces color="white" size={25} />,
  },
  {
    title: "HacktheBox",
    link: "https://app.hackthebox.com/profile/1414782",
    icon: <SiHackthebox color="white" size={25} />,
  },
  {
    title: "Github",
    link: "https://www.github.com/akbasniwal",
    icon: <SiGithub color="white" size={25} />,
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/akbasniwal/",
    icon: <SiLeetcode color="white" size={25} />,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/akbasniwal2907",
    icon: <FaTwitter color="white" size={25} />,
  },
];

function SocialApp({ title, link, icon }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </li>
  );
}

export default function SocialApps() {
  return (
    <div>
      <ul
        className=""
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {AppList.map((props, idx) => (
          <SocialApp key={idx} {...props} />
        ))}
      </ul>
    </div>
  );
}
