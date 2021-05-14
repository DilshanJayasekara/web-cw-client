import React, { Component } from "react";
import axios from "axios";
import Product from "./product";
class Products extends Component {
  state = {
    allProduct: [],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allProduct.map((product) => (
            <div key={product.productId} className="col">
              <Product
                key={product.productId}
                product={product}
                onAddToCart={() => this.AddToCart(product)}
                onUpdate={() => this.UpdateProduct(product.productId)}
                onDelete={() => this.deleteProduct(product.productId)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    var token = localStorage.getItem("token");
    console.log(token);
    var isAdmin = localStorage.getItem("isAdmin");
    console.log(isAdmin);
    const { data } = await axios.get("api/products");
    let products = data.map((product) => {
      return {
        productId: product._id,
        productCode: product.productCode,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        available: product.available,
        imagePath: product.imagePath,
      };
    });
    console.log(products);
    this.setState({ allProduct: products });
  }
  async AddToCart(product) {
    await axios
      .post(`api/carts`, {
        user: localStorage.getItem("userId"),
        productId: product.productId,
        qty: 1,
      })
      .then((response) => {
        console.log("Add to Cart");
      })
      .catch((error) => {
        console.log("Error!", "An Error Occured!", "error");
      });
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