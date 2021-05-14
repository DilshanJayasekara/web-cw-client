import React, { Component } from "react";
import Item from "./item";

class Products extends Component {
  state = {
    allProduct: [{id: 1,
    name : "this is shirt 01"},
    {id: 2,
        name : "this is shirt 02"},
        {id: 3,
            name : "this is shirt 03"},
            {id: 4,
                name : "this is shirt 04"},
            ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allProduct.map((item) => (
            <div key={item.id} className="col">
              <Item
                key={item.id}
                item={item}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async UpdateProduct(id) {
    localStorage.setItem("productId", id);
    this.props.history.push("/add-update");
  }

  async deleteProduct(id) {
    await axios.delete(`api/products/${id}`);
    let updatedProducts = this.state.allProduct.filter(
      (product) => product.productId !== id
    );
    this.setState({ allProduct: updatedProducts });
  }
}

export default Products;