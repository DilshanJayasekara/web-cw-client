import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminNavBar extends Component{
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
                <Link to = "/4" className="nav-link">Add Items</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to = "/signup" className="nav-link">Log Out</Link>
            </form>
          </div>
        </div>
      </nav>
      );
    }
}

export default AdminNavBar;