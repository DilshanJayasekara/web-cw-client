import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div class="col d-flex justify-content-center">
        <div class="card" style={{ width: "45rem" }}>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="text-center">
              <div class="form-check-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
            </div>
            <div class="text-center">
              <Link to="/signin" className="nav-link">
                Alredy Have an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
