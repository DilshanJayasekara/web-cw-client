import React, { Component } from "react";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div class="col d-flex justify-content-center">
        <div class="card" style={{ width: "45rem" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Item Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    style={{ width: "5rem" }}
                    src="https://i.imgur.com/1GrakTl.jpg"
                  />
                </th>
                <td>Shirt</td>
                <td>
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </td>
                <td>
                  &euro; 44.00 <span className="close"></span>
                </td>
              </tr>
            </tbody>
          </table>
          <form className="text">
          <div className="row mb-3">
              <label for="input" class="col-sm-3 col-form-label">
                Total Amount :-
              </label>
              <div className="col text-right"></div>
              <p for="input" class="col-sm-2 col-form-label">
              &euro; 132.00
              </p>
            </div>
            <div className="row mb-3">
              <label for="input" class="col-sm-2 col-form-label">
                Shipping to
              </label>
              <div className="col text-right"></div>
              <p for="input" class="col-sm-2 col-form-label">
                Shipping details of the user
              </p>
            </div>
          </form>
          <button className="btn btn-outline-danger">Change</button>
          <br></br>
          <button className="btn btn-outline-success">Pay</button>
          <br></br>
          <button className="btn btn-outline-dark">Back</button>
        </div>
      </div>
    );
  }
}

export default Cart;
