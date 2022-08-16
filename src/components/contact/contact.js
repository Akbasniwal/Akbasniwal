import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a5ww9hh",
        "template_alb274r",
        e.target,
        "bxgF_fw2w_lPO7EfE"
      )
      .then(
        (result) => {
          window.location.reload();
          emailjs.sendForm(
            "service_a5ww9hh",
            "template_p3w7508",
            e.target,
            "bxgF_fw2w_lPO7EfE"
          );
          alert("I have received your message.Thank you");
        },
        (error) => {
          alert(error.text);
        }
      );
  }
  return (
    <div
      style={{
        borderTop: `2px solid ${props.mode === "dark" ? "white" : "black"}`,
      }}
      className={`my-3 text-${props.mode === "dark" ? "white" : "black"}`}
    >
      <div className="container my-3">
        <h1
          style={{
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "sans-serif",
          }}
        >
          Contact Me
        </h1>
        <form
          method="get"
          onSubmit={sendEmail}
          autoComplete="off"
          className={`bg-${props.mode} text-${
            props.mode === "dark" ? "white" : "black"
          }`}
        >
          <input
            name="name"
            type={"text"}
            placeholder="Enter Your Name"
            required="required"
            style={{
              backgroundColor: `${props.mode === "dark" ? "#323232" : "white"}`,
            }}
            className={`in my-3 mx-3 text-${
              props.mode === "dark" ? "white" : "black"
            }`}
          />
          <input
            name="email"
            type={"text"}
            placeholder="Enter Your Email"
            required="required"
            style={{
              backgroundColor: `${props.mode === "dark" ? "#323232" : "white"}`,
            }}
            className={`in my-3 mx-3 text-${
              props.mode === "dark" ? "white" : "black"
            }`}
          />
          <input
            name="subject"
            type={"text"}
            placeholder="Enter Subject of Message"
            style={{
              width: "100%",
              backgroundColor: `${props.mode === "dark" ? "#323232" : "white"}`,
            }}
            className={`in mx-3 my-3 mb-8 text-${
              props.mode === "dark" ? "white" : "black"
            }`}
            rows="8"
          />
          <textarea
            name="message"
            type={"text"}
            placeholder="Enter the message"
            required="required"
            style={{
              width: "100%",
              backgroundColor: `${props.mode === "dark" ? "#323232" : "white"}`,
            }}
            className={`in mx-3 my-3 text-${
              props.mode === "dark" ? "white" : "black"
            }`}
            rows="8"
          />
          <button
            type="submit"
            value={"send"}
            className="my-3 btn btn-success"
            style={{ marginLeft: "40px" }}
          >
            Send Message
          </button>
          <button
            type="reset"
            className="my-3 btn btn-success"
            style={{ marginRight: "40px" }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
