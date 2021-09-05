import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    color: "gold",
    backgroundColor: "#242424",
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    color: "gold",
  },
});

export default function DisplayCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          // onClick=""
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shirt
          </Typography>
          <Typography variant="body2" component="p">
            Price
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.buttons}>
          Add To Cart
        </Button>
        <Button size="small" className={classes.buttons}>
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
