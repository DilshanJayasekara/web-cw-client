import React, { Component } from "react";

class Product extends Component{
    state = {};
    render() {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.item.name}</h5>
            <p className="card-text">This is the description</p>
            <button className="btn btn-outline-dark">
              Add to Cart
            </button>
            <button className="btn btn-outline-dark">
              Details
            </button>
          </div>
        </div>
      );
    }
}

export default Product;