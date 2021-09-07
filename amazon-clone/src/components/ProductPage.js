import React from "react";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <div style={{ color: "gold", backgroundColor: "black" }}>
      <h1>
        <Link to="/"> to Home</Link>
      </h1>
    </div>
  );
}
