import Navbar from "./components/navbar";
import Home from "./components/home";
import Footers from "./components/footer";
import About from "./components/about";
import React, { useState } from "react";
import Section2 from "./components/section2";
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
            </>
          }
        ></Route>
        <Route path="/about" element={<About mode={mode} />}></Route>
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
