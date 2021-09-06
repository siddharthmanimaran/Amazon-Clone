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

function CardDetails() {
  return (
    <div class="container">
      {products.map((product) => (
        <Card className="item">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.name}
              height="200"
              image={product.image}
              title={product.name}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body1" component="p">
              {product.brand}
            </Typography>
            <Typography variant="body2" component="p">
              Reviews{product.numReviews}
            </Typography>
            <Typography variant="body2" component="p">
              ₹ {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className="buttons">
              Add To Cart
            </Button>
            <Button size="small" className="buttons">
              Buy Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default CardDetails;
