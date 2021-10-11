import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

export default function ProductPageProps(props) {
  const { product } = props;

  let userDetails = JSON.parse(localStorage.getItem("userLogIn"));
  const [item, setItems] = useState({
    name: "",
    image: "",
    price: "",
    userId: "",
    productId: "",
  });
  console.log("item--->", item);
  const history = useHistory();

  console.log("userId--->", userDetails._id);
  console.log("ProductPageProps" + JSON.stringify(product));

  useEffect(() => {
    setItems({
      name: product.name,
      image: product.image,
      price: product.price,
      userId: userDetails._id,
      productId: product._id,
    });
  }, []);
  function addToCart(event) {
    // event.preventDefault();
    console.log("products details", product);
    // setItems({
    //   name: product.name,
    //   image: product.image,
    //   price: product.price,
    //   userId: userDetails._id,
    //   productId: product._id,
    // });

    // if (product_id != "") {
    // } else {
    // }
    axios
      .post(`http://localhost:4000/Amazon/orders/${product._id}`, item)
      .then((res) => {
        if (res.status === 200) {
          alert("added to cart");
          history.push("/HomePage");
        } else {
          alert("add something");
        }
      })
      .catch((err) => {
        alert("type Something");
        console.log(err);
      });
    // setItems("");
  }

  // function Quantity(e) {}
  return (
    <div>
      <Link to="/HomePage">
        {" "}
        <IconButton>
          <KeyboardBackspaceRoundedIcon fontSize="large" />
        </IconButton>
      </Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul className="details">
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
                    {/* <Select>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <MenuItem key={x + 1} value={x + 1}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select> */}
                    {/* <select
                      value={item.qty}
                      // onChange={(e) =>
                      //   dispatch(addToCart(item.product, Number(e.target.value)))
                      // }
                      onChange={(e) => {
                        const value = e.target.value;
                        product.qty = value;
                        // setItems(product.qty);
                        // {item.qty,Number(value)}
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select> */}
                  </div>
                </div>
              </li>
              <div>
                {product.countInStock > 0 ? (
                  <li>
                    <button className="primary block" onClick={addToCart}>
                      Add To Cart
                    </button>
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
