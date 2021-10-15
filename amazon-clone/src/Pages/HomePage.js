import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Box from "@mui/material/Box";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default function HomePage() {
  const images = [
    { label: "first pic", imgPath: "https://picsum.photos/1000" },
    { label: "second pic", imgPath: "https://picsum.photos/200" },
    { label: "third pic", imgPath: "https://picsum.photos/500" },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");

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

  const filterProduct =
    search.length === 0
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <>
      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBox"
      />

      <div className="SlideBox">
        <div className="SlideContent">
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 300,
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </div>
      </div>
      <div className="row center">
        <Product products={filterProduct} />

        {/* {products.map((product) => (
          <Product key={product._id} product={product} />
        ))} */}
      </div>
    </>
  );
}
