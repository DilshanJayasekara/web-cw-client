import React, { Component } from "react";
import Item from "./admin-product";

class AdminProduts extends Component {
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

}

export default AdminProduts;