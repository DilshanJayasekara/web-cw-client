import React, { Component } from "react";
class CartRow extends Component {
  render() {
    return (
      <tr scope="row">
        <td>
          <img
            className="img-fluid"
            style={{ width: "5rem" }}
            src={this.props.item.imagePath}
          />
        </td>
        <td>{this.props.item.title}</td>
        <td>
          <a href="#" class="border">
            {this.props.item.qty}
          </a>
        </td>
        <td>
          Rs. {this.props.item.price} <span className="close"></span>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default CartRow;
