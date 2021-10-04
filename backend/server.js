const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const AmazonRoutes = express.Router();
const PORT = process.env.PORT || 4000;
const bcrypt = require("bcrypt");

const Product = require("./Products.model");
const User = require("./Users.model");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Amazon", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

AmazonRoutes.post("/Products", async (req, res, next) => {
  console.log("product added-->", req.body);
  try {
    const {
      name,
      category,
      image,
      price,
      countInStock,
      brand,
      rating,
      numReviews,
      description,
    } = req.body;

    const product = new Product({
      name,
      category,
      image,
      price,
      countInStock,
      brand,
      rating,
      numReviews,
      description,
    });
    const ret = await product.save();
    res.json(ret);
    console.log("added");
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

AmazonRoutes.post("/signUp", async (req, res) => {
  console.log(" ", req.body);
  const salt = await bcrypt.genSalt(10);

  let newuser = new User();
  newuser.firstName = req.body.firstName;
  newuser.lastName = req.body.lastName;
  newuser.userName = req.body.userName;
  newuser.email = req.body.email;
  newuser.password = req.body.password;
  newuser.password = await bcrypt.hash(newuser.password, salt);
  newuser
    .save()
    .then((x) => {
      res.status(200).json({ newuser: "user added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ newuser: "adding user failed" });
    });
});

AmazonRoutes.route("/logIn").post((req, res) => {
  console.log("Body--->", req.body);

  User.find({ userName: req.body.userName }, function (err, user) {
    console.log("------>", user);
    if (err) {
      res.status(400).send("Service not available");
    }
    if (user.length) {
      const userDetails = user[0];
      bcrypt
        .compare(req.body.password, userDetails.password)
        .then((confirmPassWord) => {
          console.log("Confirm passed result--->", confirmPassWord);
          if (confirmPassWord) {
            res.json({
              success: true,
              userDetails: userDetails,
            });
          } else {
            res.json({
              success: false,
              message: "Invalid password",
            });
          }
        })
        .catch((err) => {
          console.log("Error while password check");
        });
    } else {
      res.json({
        success: false,
        message: "User not found",
      });
    }
  });
});

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/", (req, res) => {
//   res.send("server is started");
// });
app.use("/Amazon", AmazonRoutes);
app.use("/Products", AmazonRoutes);
app.use("/signUp", AmazonRoutes);
app.use("/logIn", AmazonRoutes);
app.listen(PORT, console.log(`Server started at port ${PORT}`));
