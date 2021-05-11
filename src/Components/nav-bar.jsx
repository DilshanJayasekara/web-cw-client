import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component{
    state = {};
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div><h1>STORE</h1></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to = "/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to = "/3" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to = "/4" className="nav-link">Cart</Link>
              </li>
            </ul>
            <form className="d-flex">
            <select id="inputState" class="form-select">
              <option selected>SL Rupees</option>
              <option>USD</option>
            </select>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
              <Link to = "/signup" className="nav-link">Register</Link>
            </form>
          </div>
        </div>
      </nav>
      );
    }
}

export default NavBar;