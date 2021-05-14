import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
class NavBar extends Component {
  state = {};
  render() {
    if ("true" === localStorage.getItem("isAdmin")) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div>
              <h1>STORE</h1>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add-product" className="nav-link">
                    Add Items
                  </Link>
                </li>
              </ul>
              <Link to="/signin" className="nav-link">
                Sign Out
              </Link>
            </div>
          </div>
        </nav>
      );
    } else {
      if ("true" === localStorage.getItem("login")) {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div>
                <h1>STORE</h1>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/3" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      Cart
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <select id="inputState" class="form-select">
                    <option selected>SL Rupees</option>
                    <option>USD</option>
                  </select>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <Link to="/signin" className="nav-link">
                    Sign Out
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        );
      } else {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div>
                <h1>STORE</h1>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/3" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      Cart
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <Link to="/signin" className="nav-link">
                    Sign In
                  </Link>
                  <br />
                  <br />
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        );
      }
    }
  }
}

export default NavBar;