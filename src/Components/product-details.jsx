import React, { Component } from "react";

class ProductDetails extends Component{
    state = {};
    render() {
      return (
      <div class="card" style={{ width: "20rem"  }}>
      <img src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png" className="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Item Name</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-outline-dark">
              Back
            </button>
            <button className="btn btn-outline-dark">
            Add to Cart
            </button>
      </div>
    </div>
      );
    }
}

export default ProductDetails;