import React, { useEffect, useState } from "react";
import ProductPageProps from "../components/ProductPageProps";
import axios from "axios";

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
