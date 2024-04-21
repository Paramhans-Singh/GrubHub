const express = require("express");
const stripe = require("stripe")(
  "sk_test_51MigHSSHTcSHB7wrV7nOfm9uMCCHAVCJykjg2vD3KbrQyKFqlsU00zn8R4cXZgPtkUZoN5EYiOZpmBx6ZLJ1FJU300ueL7x6az"
);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

exports.placeorder = async (req, res) => {
  const { token, totalAmount, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    console.log("here " + totalAmount);

    const payment = await stripe.paymentIntents.create(
      {
        amount: totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userID: currentUser._id,

        orderItems: cartItems,
        orderAmount: totalAmount,

        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },

        transactionID: payment.id,
      });

      newOrder.save();

      res.send("Payment done");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong..." + error });
  }
};

exports.getuserorders = async (req, res) => {
  const userID = req.params.userID;

  try {
    const orders = await Order.find({ userID: userID }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong...." });
  }
};
