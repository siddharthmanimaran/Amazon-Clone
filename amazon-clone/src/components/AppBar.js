import React from "react";

export default function AppBar() {
  let userDetails = JSON.parse(localStorage.getItem("userLogIn"));
  const userId = userDetails._id;

  return (
    <header className="row">
      <div>
        <a className="brand" href="/HomePage">
          Amazon Clone
        </a>
      </div>
      <div>
        <a href={`/cart/${userId}`}>Cart</a>
        <a href="/LogIn">Log In</a>
      </div>
    </header>
  );
}
