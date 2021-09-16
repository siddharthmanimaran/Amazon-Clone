import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

export default function CartPage(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  return (
    <div className="row-top">
      <div className="col-2">
        <h1>Cart</h1>
        <ul>
          <li>
            <div className="row">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="small"
                ></img>
              </div>
              <div className="min-30">
                <Link to={`/product/${productId}`}>{product.name}</Link>
              </div>
              <div>
                <select
                  value={product.qty}
                  // onChange={(e) =>
                  //   dispatch(addToCart(item.product, Number(e.target.value)))
                  // }
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>₹{product.price}</div>
              <div>
                <button type="button">Delete</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Total
                {/* ({product.reduce((a, c) => a + c.qty, 0)}items):₹
                {product.reduce((a, c) => a + c.price * c.qty, 0)} */}
              </h2>
            </li>

            <li>
              <button
                type="button"
                className="primary block" // disabled=
              >
                CheckOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
