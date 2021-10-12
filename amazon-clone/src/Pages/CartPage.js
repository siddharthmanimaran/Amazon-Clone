import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import data from "../data";
// import { Link } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "@mui/material/Button";
// import { yellow } from "@mui/material/colors";
import axios from "axios";
import CartPageProps from "../components/CartPageProps";

export default function CartPage() {
  const [product, setProduct] = useState([]);
  const history = useHistory();
  // const product = data.products.find((x) => x._id === props.match.params.id);
  // const products = props.match.params.id;
  // const qty = props.location.search
  //   ? Number(props.location.search.split("=")[1])
  //   : 1;

  // const [quantity, setQuantity] = useState();
  // function handleQty(e) {
  //   const event = e.target.value;
  //   setQuantity(event);
  // }

  let userDetails = JSON.parse(localStorage.getItem("userLogIn"));
  const userId = userDetails._id;
  console.log("userId--->", userId);
  useEffect(() => {
    const cartItems = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/Amazon/orders/${userId}`
        );
        if (res.data.success) {
          setProduct(res.data.result);
          console.log(res.data.result);
        } else {
          alert(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    cartItems();
  }, [userId]);

  return (
    <>
      {product.map((data) => (
        <CartPageProps key={data._id} product={data} />
      ))}
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
                onClick={() => {
                  history.push("/shipping");
                }}
              >
                CheckOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
