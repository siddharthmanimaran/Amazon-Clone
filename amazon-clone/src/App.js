import React from "react";
// import data from "./data";
// import Product from "./components/Product";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
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
            <a href="/LogIn">Log In</a>
          </div>
        </header>
        <main>
          <Route path="/SignUp" component={SignUpPage} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/cart/:id" component={CartPage}></Route>
          <Route path="/product/:pId" component={ProductPage}></Route>
          <Route path="/" component={LogInPage} exact></Route>
        </main>
        <footer className="row center">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
