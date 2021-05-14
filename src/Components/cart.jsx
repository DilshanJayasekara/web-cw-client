import React, { Component } from "react";
import CartRow from "./cart-row";
import axios from "axios";
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
              {this.state.allitems.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  onDelete={() => this.deleteItem(item.id)}
                />
              ))}
            </tbody>
          </table>
          <form className="text">
            <div className="row mb-3">
              <label for="input" class="col-sm-3 col-form-label">
                Total Amount :-
              </label>
              <div className="col text-right"></div>
              <p for="input" class="col-sm-2 col-form-label">
                &euro; {this.state.total}
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

  async componentDidMount() {
    const id = localStorage.getItem("userId");
    const { data } = await axios.get(`api/carts/items/${id}`);
    let tot = 0;
    let items = data.map((item) => {
      tot = tot + item.price;
      return {
        id: item._id,
        productId: item.productId,
        qty: item.qty,
        price: item.price,
        title: item.title,
        productCode: item.productCode,
        imagePath: item.imagePath,
      };
    });
    this.setState({ allitems: items });
    this.setState({ total: tot });
  }
  
  async deleteItem(id) {
    const user = localStorage.getItem("userId");
    await axios.post(`api/carts/${id}/${user}`);
    let updateditem = this.state.allitems.filter(
      (item) => item.id !== id
    );
    this.setState({ allitems: updateditem });
    window.location.reload(false);
  }
}

export default Cart;
