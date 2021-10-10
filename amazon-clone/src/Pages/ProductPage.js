import React, { useEffect, useState } from "react";
import ProductPageProps from "../components/ProductPageProps";
import axios from "axios";
// import Rating from "../components/Rating";
// import { Link, useHistory } from "react-router-dom";

export default function ProductPage(props) {
  const products = props.match.params.pId;
  const [product, setProduct] = useState([]);
  console.log("prodct--->", product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/Amazon/oneProduct/${products}`
        );

        if (res.data.success) {
          setProduct(res.data.result);
          console.log(res.data.result);
        } else {
          alert(res.data.message);
        }
      } catch (err) {
        alert("no data");
      }
    };
    fetchData();
  }, [products]);

  return (
    <>
      {product.map((data) => (
        <ProductPageProps key={data._id} product={data} />
      ))}
    </>
  );
}

// export default function ProductPage(props) {
//   const products = props.match.params.pId;
//   const [product, setProduct] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:4000/Amazon/oneProduct/${products}`
//         );

//         if (res.data.success) {
//           const data = res.data.result;
//           setProduct(data);
//           // console.log(data);
//         } else {
//           alert(res.data.message);
//         }
//       } catch (err) {
//         alert("no data");
//       }
//     };
//     fetchData();
//   }, [products]);

//   function addToCart() {
//     axios
//       .post(`http://localhost:4000/Amazon/orders/${products}`, product)
//       .then((res) => {
//         if (res.status === 200) {
//           alert("added to cart");
//           history.push("/HomePage");
//         } else {
//           alert("add something");
//         }
//       })
//       .catch((err) => {
//         alert("type Something");
//         console.log(err);
//       });
//     setProduct(product);
//   }

//   //   let userId = JSON.parse(localStorage.getItem("userLogIn"));
//   //   console.log(userId._id);
//   // }
//   return (
//     <div>
//       <Link to="/HomePage"> Back to Home</Link>
//       {product && (
//         <div>
//           {product.map((productData, index) => (
//             <div key={productData._id} className="row top">
//               <div className="col-2">
//                 <img src={productData.image} alt={productData.name}></img>
//               </div>
//               <div className="col-1">
//                 <ul className="details">
//                   <li>
//                     <h1>{productData.name}</h1>
//                   </li>
//                   <li>
//                     <Rating
//                       rating={productData.rating}
//                       numReviews={productData.numReviews}
//                     />
//                   </li>
//                   <li>price: {productData.price}</li>
//                   <li>Description: {productData.description}</li>
//                 </ul>
//               </div>
//               <div className="col-1">
//                 <div className="card card-body">
//                   <ul>
//                     <li>
//                       <div className="row">
//                         <div>Price</div>
//                         <div className="price">₹{productData.price}</div>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="row">
//                         <div>Status</div>
//                         <div>
//                           {productData.countInStock > 0 ? (
//                             <span className="success">In Stock</span>
//                           ) : (
//                             <span className="danger">Unavailable</span>
//                           )}
//                         </div>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="row">
//                         <div>Quantity{}</div>
//                         <div>
//                           {/* <Select>
//                       {[...Array(product.countInStock).keys()].map((x) => (
//                         <MenuItem key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </MenuItem>
//                       ))}
//                     </Select> */}
//                           <select
//                             value={productData.qty}
//                             // onChange={(e) =>
//                             //   dispatch(addToCart(item.product, Number(e.target.value)))
//                             // }
//                             // onChange={(e) =>{

//                             // }}
//                           >
//                             {[...Array(productData.countInStock).keys()].map(
//                               (x) => (
//                                 <option key={x + 1} value={x + 1}>
//                                   {x + 1}
//                                 </option>
//                               )
//                             )}
//                           </select>
//                         </div>
//                       </div>
//                     </li>
//                     <div>
//                       {productData.countInStock > 0 ? (
//                         <li>
//                           {/* <a href={`/LogIn/:${product._id}`}> */}
//                           <button className="primary block" onClick={addToCart}>
//                             Add To Cart
//                           </button>
//                           {/* </a> */}
//                         </li>
//                       ) : (
//                         "none"
//                       )}
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
