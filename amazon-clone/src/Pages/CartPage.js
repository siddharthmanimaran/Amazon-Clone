import React, { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";

export default function CartPage(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  function handleClick() {
    props.onDelete(props.id);
  }
  // const [quantity, setQuantity] = useState();
  // function handleQty(e) {
  //   const event = e.target.value;
  //   setQuantity(event);
  // }

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
              <div className="select">
                <select
                // value={quantity}
                // onchange={handleQty}
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
              <div style={{ color: "gold" }}>₹{product.price}</div>
              <div>
                <Button
                  variant="outlined"
                  startIcon={
                    <DeleteIcon
                    // sx={{ backgroundColor: yellow[500] }}
                    />
                  }
                  sx={{ backgroundColor: yellow[500] }}
                  onChange={handleClick}
                >
                  Remove
                </Button>
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
