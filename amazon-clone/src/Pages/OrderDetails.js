import React from "react";

function OrderDetails() {
  return (
    <div className="row">
      <div className="orderBox">
        <h1 style={{ textAlign: "center" }}>shipping</h1>
      </div>
      <div className="orderBox">
        <h1 style={{ textAlign: "center" }}>Payment</h1>
      </div>
      <div className="orderBox">
        <h1 style={{ textAlign: "center" }}>Items</h1>
      </div>
    </div>
  );
}

export default OrderDetails;
