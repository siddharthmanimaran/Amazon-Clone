import React from "react";
// import data from "../data";

export default function CartPage(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Cart</h1>
      <p>
        Add To Cart : ProductId:{productId} Qty:{qty}
      </p>
    </div>
  );
}
