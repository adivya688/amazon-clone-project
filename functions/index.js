const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQ1t1Kx2kSeoV7K4kihSKFLs3qY32BmdHxxNFqU8XIyMVE9AMLn6F0Pfe8HQlfyFfsqpXoobvP7HDL7FPO8YQ3N00pjrtHKSr"
);
//API
//-App config
const app = express();
//-middleware
app.use(cors());
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//(http://localhost:5001/clone-b36c8/us-central1/api)
