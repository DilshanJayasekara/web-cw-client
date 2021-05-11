import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminProduts from "./Components/admin-products";
import NavBar from "./Components/nav-bar";
import SignUp from "./Components/signup";
import SignIn from "./Components/signin";
import Cart from "./Components/cart"
import ChangeShipping from "./Components/change-shipping"
import AdminAddItemDetails from "./Components/admin-add-product"


ReactDom.render(
    <BrowserRouter>
        <NavBar/>
        <Route exact path="/" component={AdminProduts}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/4" component={AdminAddItemDetails}/>
        <Route exact path="/3" component={ChangeShipping}/>
    </BrowserRouter>
    , document.getElementById("root"));