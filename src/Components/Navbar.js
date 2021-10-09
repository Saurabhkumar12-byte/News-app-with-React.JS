import React, { Component } from "react";
import {Link }from "react-router-dom";
import { toast } from "react-toastify";


export class Navbar extends Component {
  render() {
    return (
      
      <div>
        <nav className="navbar  navbar-expand-lg navbar-dark  text-white navbar-sha " >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
             News-Spy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/home" onClick={()=>{this.notify("General News")}}>
                  home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/sports" onClick={()=>{this.notify("Sports News")}}>
                  sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/business" onClick={()=>{this.notify("Business News")}}>
                  business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/technology" onClick={()=>{this.notify("Technology News")}}>
                  technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/entertainment" onClick={()=>{this.notify("Entertainment News")}}>
                  entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/health" onClick={()=>{this.notify("Health News")}}>
                  health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/science" onClick={()=>{this.notify("Science News")}}>
                  science
                  </Link>
                </li>
               
              </ul>
           
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
  notify(message){
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }

}

export default Navbar;
