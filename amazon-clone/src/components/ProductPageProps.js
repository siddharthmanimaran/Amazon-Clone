import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function ProductPageProps(props) {
  const { product } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    color: "gold",
    // border: "2px solid #000",
    // boxShadow: 24,
    filter: "drop-shadow(0px 2px 8px gold)",
    p: 4,
  };

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  let userDetails = JSON.parse(localStorage.getItem("userLogIn"));
  const userId = userDetails._id;

  const [item, setItems] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    userId: "",
    productId: "",
  });
  const history = useHistory();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setItems({
      name: product.name,
      image: product.image,
      price: product.price,
      qty: quantity,
      userId: userDetails._id,
      productId: product._id,
    });
  }, [quantity]);
  function addToCart(event) {
    axios
      .post(`http://localhost:4000/Amazon/orders/${product._id}`, item)
      .then((res) => {
        if (res.status === 200) {
          // alert("added to cart");
          // history.push("/HomePage");
        } else {
          alert("add something");
        }
      })
      .catch((err) => {
        // alert("type Something");
        console.log(err);
      });
    handleOpen();
  }

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
            <li>price: ₹{product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">₹{product.price * quantity}</div>
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
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x}>
                          {x}
                        </option>
                      ))}
                    </select>
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
              <div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <div className="modal-Box">
                      <Box sx={style}>
                        <div>
                          <h1 style={{ textAlign: "center" }}>
                            Happy Shopping
                          </h1>
                          <h1 style={{ textAlign: "center" }}>
                            {product.name} Added To Cart
                          </h1>
                        </div>

                        <div className="row">
                          <button
                            className=" modalButton"
                            onClick={() => {
                              history.push("/homePage");
                            }}
                          >
                            Continue Shopping
                          </button>

                          <button
                            className=" modalButton"
                            onClick={() => {
                              history.push(`/cart/${userId}`);
                            }}
                          >
                            To CheckOut
                          </button>
                        </div>
                      </Box>
                    </div>
                  </Modal>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
