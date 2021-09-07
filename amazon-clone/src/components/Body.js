import React from "react";
import CardDetails from "./Card";
import ProductPage from "./ProductPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Body() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={CardDetails} />
        <Route path="/productPage/:id" component={ProductPage} />
      </Router>
    </div>
  );
}

export default Body;
