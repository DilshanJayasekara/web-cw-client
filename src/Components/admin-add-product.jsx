import React, { Component } from "react";

class AdminAddProductDetails extends Component {
  state = {};
  render() {
    return (
      <div class="col d-flex justify-content-center">
        <div class="card" style={{ width: "45rem" }}>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputname" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="inputname" />
  </div>
  <div class="col-md-6">
    <label for="inputcatogary" class="form-label">Catogary</label>
    <input type="text" class="form-control" id="inputcatogary"  />
  </div>
  <div class="col-md-6">
    <label for="inputmanufacturer" class="form-label">Manufacturer</label>
    <input type="text" class="form-control" id="inputmanufacture" />
  </div>
  <div class="col-md-6">
    <label for="inputitemcode" class="form-label">Item Code</label>
    <input type="text" class="form-control" id="inputitemcode" />
  </div>
  <div class="col-md-6">
    <label for="inputprice" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="inputprice" />
  </div>
  <div class="col-12">
    <label for="inputdescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="inputdescription" />
  </div>
  <div class="col-12">
    <label for="inputURL" class="form-label">Image URL</label>
    <input type="text" class="form-control" id="inputURL" />
  </div>
  <div class="text-center">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Availability
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Add Item</button>
</form>
        </div>
      </div>
    );
  }
}

export default AdminAddProductDetails;