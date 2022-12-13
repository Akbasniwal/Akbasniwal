import React from "react";
import TypeWriter from "typewriter-effect";

export default function Typewriter() {
  return (
    <div className="my-3">
      <h4 style={{ fontWeight: "bold" }}>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.start();
            for (let x = 0; x < 20; x++) {
              typewriter
                .typeString("I'm Akbasniwal")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Frontend Devloper")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Competitive coder")
                .deleteAll();
            }
          }}
        />
      </h4>
    </div>
  );
}
