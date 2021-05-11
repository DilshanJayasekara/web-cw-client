import React, { Component } from "react";

class AdminProduct extends Component{
    state = {};
    render() {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.item.name}</h5>
            <p className="card-text">This is the description</p>
            <button className="btn btn-outline-dark">
              Remove
            </button>
            <button className="btn btn-outline-dark">
              Update
            </button>
          </div>
        </div>
      );
    }
}

export default AdminProduct;