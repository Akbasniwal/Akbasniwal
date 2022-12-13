import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill as Close } from "react-icons/ri";

class NavIcon extends React.Component {
  render() {
    if (this.props.isopen === false) return <HiMenu size={30} />;
    else return <Close size={30} />;
  }
}

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
    };
  }

  handleClick(i) {
    if (this.state.isopen === false) this.setState({ isopen: true });
    else this.setState({ isopen: false });
  }

  renderMenubar(i) {
    return <NavIcon isopen={this.state.isopen} />;
  }

  render() {
    return (
      <>
        <nav
          className={`menubar navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} sticky-top`}
          style={{
            borderBottom: `1px solid ${
              this.props.mode === "dark" ? "white" : "black"
            }`,
          }}
        >
          <div className="container-fluid">
            <button
              className="toggler"
              style={{
                color: `${this.props.mode === "dark" ? "white" : "black"}`,
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => this.handleClick()}
            >
              {this.renderMenubar(0)}
            </button>
            <Link className="navbar-brand centerText" to="/">
              <h3 style={{ fontWeight: "bolder", margin: "0px" }}>
                AK.Basniwal
              </h3>
            </Link>
            <div></div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-hvr">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="./#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch right">
              <input
                onClick={this.props.change}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkswitch"
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}
