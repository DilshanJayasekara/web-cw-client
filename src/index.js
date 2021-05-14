import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Components/products";
import NavBar from "./Components/nav-bar";
import SignUp from "./Components/signup";
import SignIn from "./Components/signin";
import Cart from "./Components/cart";
import AdminAddProduct from "./Components/admin-add-product";
import AdminUpdateProduct from "./Components/admin-update-product";
import ChangeShipping from "./Components/change-shipping";
import GooglePay from "./Components/google-pay";
axios.defaults.baseURL = "http://localhost:5000/";

ReactDom.render(
  <BrowserRouter forceRefresh={true}>
    <NavBar />
    <Route exact path="/" component={Product} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/add-product" component={AdminAddProduct} />
    <Route exact path="/add-update" component={AdminUpdateProduct} />
    <Route exact path="/change-shipping" component={ChangeShipping} />
    <Route exact path="/google-pay" component={GooglePay} />
  </BrowserRouter>,
  document.getElementById("root")
);
