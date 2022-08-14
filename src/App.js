import Navbar from "./components/navbar/navbar";
import Home from "./components/home";
import Footers from "./components/footer";
import Contact from "./components/contact/contact";
import Resume from "./components/resume";
import React, { useState } from "react";
import Section2 from "./components/section2";
import Upscroller from "./upscroller";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  if (mode === "dark") document.body.style.backgroundColor = "#323232";
  const ThemeHandler = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      setMode("light");
    } else {
      document.body.style.backgroundColor = "#323232";
      setMode("dark");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} change={ThemeHandler} />
      <Upscroller mode={mode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container my-5">
                <Home mode={mode} />
              </div>
              <div className="my-5" id="projects">
                <Section2 mode={mode} />
              </div>
              <div className="my-5" id="contact">
                <Contact mode={mode} />
              </div>
            </>
          }
        ></Route>
        <Route path="/resume" element={<Resume mode={mode} />}></Route>
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
