import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function Upscroller(props) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "60px",
        left: "30px",
        zIndex: "100",
      }}
      className={`text-${props.mode === "dark" ? "white" : "dark"}`}
    >
      <a href="#">
        <FaRegArrowAltCircleUp
          style={{
            color: `${props.mode === "dark" ? "white" : "black"}`,
            borderRadius: "50%",
          }}
          size={50}
        />
      </a>
    </div>
  );
}
