import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import Rating from "../components/Rating";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:4000/Amazon/product");
        if (res.data.success) {
          // console.log(res.data);
          setLoading(false);
          const data = res.data.result;
          setProducts(data);
          console.log(data);
        } else {
          alert(res.data.message);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="row center">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

// function HomePage() {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get("http://localhost:4000/Amazon/product");
//         const data = res.data.result;
//         console.log(data);
//         setProduct(data);
//       } catch {}
//     };
//     getProduct();
//   }, []);

//   return (
//     <div>
//       {product && (
//         <div className="row center">
//           {product.map((productsData, index) => (
//             <div key={productsData._id} className="card">
//               <a href={`/product/${productsData._id}`}>
//                 <img
//                   className="medium"
//                   src={productsData.image}
//                   alt={productsData.name}
//                 />
//               </a>
//               <div className="card-body">
//                 <a href={`/product/${productsData._id}`}>
//                   <h2 className="product-name">{productsData.name}</h2>
//                 </a>
//                 <Rating
//                   rating={productsData.rating}
//                   numReviews={productsData.numReviews}
//                 />
//                 <div className="price">₹{productsData.price}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomePage;
