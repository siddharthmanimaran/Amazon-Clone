const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const AmazonRoutes = express.Router();
const PORT = process.env.PORT || 4000;
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");

const Product = require("./models/Products.model");
const User = require("./models/Users.model");
const Order = require("./models/Orders.model");

// let mailTransporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "sid28071998@gmail.com",
//     pass: "28071998",
//   },
// });

// let mailDetails = {
//   from: "sid28071998@gmail.com",
//   to: "sidsid28071998@gmail.com",
//   subject: "Test mail",
//   text: "Hello World!!!!!!!!!",
// };

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
  // console.log("product added-->", req.body);
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
    // console.log("added");
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

AmazonRoutes.get("/product", async (req, res) => {
  try {
    Product.find({}, (err, data) => {
      // console.log("product found-->", data);
      if (err) {
        console.log(err);
      }
      if (data.length) {
        res.json({ success: true, result: data });
      } else {
        res.json({ success: false, message: "Product not found" });
      }
    });
  } catch (err) {
    console.log("error in data-->", err);
  }
});

AmazonRoutes.post("/signUp", async (req, res) => {
  // console.log(" ", req.body);

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
  // console.log("Body--->", req.body);

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

AmazonRoutes.get("/oneProduct/:id", async (req, res) => {
  let id = req.params.id;
  try {
    Product.find({ _id: mongoose.Types.ObjectId(id) }, (err, data) => {
      // console.log("product found-->", data);
      if (err) {
        console.log(err);
      }
      if (data.length) {
        res.json({ success: true, result: data });
      } else {
        res.json({ success: false, message: "Product not found" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

AmazonRoutes.route("/orders/:productId").post(function (req, res) {
  // console.log("added content--->", req.body);
  //console.log("id", req.params.userId);
  let orders = new Order();
  orders.name = req.body.name;
  orders.image = req.body.image;
  orders.qty = req.body.qty;
  orders.price = req.body.price;
  orders.userId = req.body.userId;
  orders.productId = req.params.productId;

  orders
    .save()
    .then((x) => {
      // console.log(x);
      res.status(200).json({ orders: "record added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("adding new record failed");
    });
});

AmazonRoutes.get("/orders/:userId", async (req, res) => {
  let userId = req.params.userId;
  try {
    Order.find({ userId: mongoose.Types.ObjectId(userId) }, (err, data) => {
      if (data.length) {
        res.json({ success: true, result: data });
      } else {
        res.json({ success: false, message: "no products in cart" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

AmazonRoutes.route("/delete/:id").delete((req, res) => {
  console.log("id--->", req.params.id);
  let id = req.params.id;

  Order.findByIdAndDelete({
    _id: mongoose.Types.ObjectId(id),
  })
    .then((x) => {
      res.status(200).send("data deleted");
      console.log("done");
    })
    .catch((err) => {
      res.status(400).send("fail to delete");
    });
});

let mailDetails = {
  from: "sid28071998@gmail.com",
  to: "sidsid28071998@gmail.com",
  subject: "Test mail",
  text: "Hello World!!!!!!!!!",
};

// mailTransporter.sendMail(mailDetails, function (err, data) {
//   if (err) {
//     console.log(err);
//     console.log("Error Occurs");
//   } else {
//     console.log("Email sent successfully");
//   }
// });

app.use("/Amazon", AmazonRoutes);
app.use("/oneProduct/:id", AmazonRoutes);
app.use("/product", AmazonRoutes);
app.use("/Products", AmazonRoutes);
app.use("/signUp", AmazonRoutes);
app.use("/logIn", AmazonRoutes);
app.use("/orders/:productId", AmazonRoutes);
app.use("/orders/:userId", AmazonRoutes);
app.use("/delete/:id", AmazonRoutes);
app.listen(PORT, console.log(`Server started at port ${PORT}`));
