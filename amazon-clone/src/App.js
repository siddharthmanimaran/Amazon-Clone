import React from "react";
// import data from "./data";
// import Product from "./components/Product";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazon Clone
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signIn.html">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
        </main>
        <footer className="row center">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
