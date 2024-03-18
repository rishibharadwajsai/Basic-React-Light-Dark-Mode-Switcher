import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        />
      </div>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        convert to Lowercase
      </button>

      <h2
        className="my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        Text Summary
      </h2>

      <p style={{ color: props.mode === "light" ? "black" : "white" }}>
        Total: {text.split(" ").length} words and {text.length} characters.
      </p>
    </>
  );
}
