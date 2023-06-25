const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express());
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("hello world");
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  try {
    await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is running at Port ${port}`);
});
