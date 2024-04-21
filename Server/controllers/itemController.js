const express = require("express");
const Item = require("../models/itemModel");

exports.getallitems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};
