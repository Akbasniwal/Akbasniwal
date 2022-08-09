import React from "react";
import TypeWriter from "typewriter-effect";

export default function Typewriter() {
  return (
    <div className="my-3">
      <h3>Abhishek kumar basniwal</h3>
      <h5>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.start();
            for (let x = 0; x < 30; x++) {
              typewriter
                .typeString("I'm Akbasniwal")
                .pauseFor(500)
                .deleteAll()
                .typeString("Frontend Devloper")
                .pauseFor(500)
                .deleteAll()
                .typeString("Competitive coder")
                .deleteAll();
            }
          }}
        />
      </h5>
    </div>
  );
}
