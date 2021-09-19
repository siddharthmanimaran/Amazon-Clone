import React from "react";
import data from "../data";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function ProductPage(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found!!</div>;
  }
  return (
    <div>
      <Link to="/"> Back to Home</Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>price: {product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">₹{product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Quantity</div>
                  <div>
                    <Select>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <MenuItem key={x + 1} value={x + 1}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
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
                </div>
              </li>
              <div>
                {product.countInStock > 0 ? (
                  <li>
                    <a href={`/cart/${product._id}`}>
                      <button className="primary block">Add To Cart</button>
                    </a>
                  </li>
                ) : (
                  "none"
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
