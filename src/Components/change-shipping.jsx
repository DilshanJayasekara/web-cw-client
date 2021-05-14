import React, { Component } from "react";
import axios from "axios";
class ChangeShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      addressLine01: "",
      addressLine02: "",
      city: "",
      state: "",
      zip: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-12">
            <label className="form-label">Address Line 01</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="addressLine01"
              value={this.state.addressLine01}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Address Line 02</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="addressLine02"
              value={this.state.addressLine02}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              value={this.state.zip}
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update Adress
            </button>
          </div>
        </form>
      </div>
    );
  }
  async componentDidMount() {
    const user = localStorage.getItem("userId");
    const adress = await axios
      .get(`api/address/${user}`)
      .then((response) => {
        this.setState({ user: response.data.user });
        this.setState({ addressLine01: response.data.addressLine01 });
        this.setState({ addressLine02: response.data.addressLine02 });
        this.setState({ city: response.data.city });
        this.setState({ state: response.data.state });
        this.setState({ price: response.data.price });
        this.setState({ zip: response.data.zip });
      })
      .catch((error) => {
        alert(error);
      });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const user = localStorage.getItem("userId");
    const { data } = await axios.post(`api/address`, {
      user: user,
      addressLine01: this.state.addressLine01,
      addressLine02: this.state.addressLine02,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    });
    if (data) {
      alert("Address Update Successfully..!");
      this.props.history.push("/google-pay");
    }
  }
}
export default ChangeShipping;