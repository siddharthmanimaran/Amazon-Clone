import "./Card.css";
import React from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
  CardActions,
} from "@material-ui/core/";
import products from "./productsData";
import productPage from "./ProductPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function CardDetails(product) {
  function toProduct() {
    return { productPage };
  }
  console.log(toProduct());
  return (
    <div className="container">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <Card>
            <Link to="/productPage" style={{ textDecoration: "none" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="200"
                  image={product.image}
                  title={product.name}
                />

                {/* <Route exact path="/productPage" component={productPage} /> */}
                <div className="cardContent">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {product.brand}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Reviews ({product.Reviews})
                    </Typography>
                    <Typography variant="body2" component="p">
                      ₹ {product.price}
                    </Typography>
                  </CardContent>
                </div>
              </CardActionArea>
            </Link>

            <div className="buttonsArea">
              <CardActions>
                <Button size="small" className="buttons">
                  Add To Cart
                </Button>
                <Button size="small" className="buttons">
                  Buy Now
                </Button>
              </CardActions>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardDetails;
