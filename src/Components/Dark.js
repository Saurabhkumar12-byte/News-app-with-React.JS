import React, { Component } from "react";

export class Dark extends Component {
  darkFunction = async () => {
    document.getElementsByTagName("body")[0].classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
      document.body.style.backgroundColor = "#282c34";
      document.getElementById("fontWhite").classList.add("text-white");
      document.getElementById("fontDark").classList.add("text-white");
    } else {
      document.body.style.backgroundColor = "#e3e6e3";
      document.getElementById("fontWhite").classList.remove("text-white");
      document.getElementById("fontDark").classList.remove("text-white");
    }
  };
  render() {
    return (
      <div className="container mt-4 mb-0 p-0">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="ms-4 ms-md-5 ps-md-3 " id="fontWhite">
            News spy
          </h2>

          <div className="form-check form-switch d-flex justify-content-between align-items-center">
            <label
              className="form-check-label fw-normal fs-4 me-5 fontWhite"
              htmlFor="flexSwitchCheckChecked"
              id="fontDark"
            >
              Dark Mode
            </label>
            <input
              className="form-check-input me-4 mt-1"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onClick={this.darkFunction}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dark;
