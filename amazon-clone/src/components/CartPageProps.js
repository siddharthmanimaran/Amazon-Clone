import React from "react";

import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function CartPageProps(props) {
  // const[cart,setCart] =useState()
  const { product } = props;

  console.log(product);
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="row-top">
      <div className="col-2">
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
                <Link to={`/product/${product.productId}`}>{product.name}</Link>
              </div>
              {/* <div className="select">
                <select
                // value={quantity}
                // onchange={handleQty}
                // onChange={(e) =>
                //   dispatch(addToCart(item.product, Number(e.target.value)))
                // }
                >
                  {[...Array(10).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div> */}
              <div style={{ color: "gold" }}>₹{product.price}</div>
              <div>
                <Tooltip title="Delete">
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={handleClick}
                    className="button delete"
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
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
                className="primary block"
                // disabled=
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
