const express = require("express");

const router = express.Router();

const path = require("path");

const rootDir = require("../util/path");

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("in the second middleWare ");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // we dont need to use next() becuse we want only this response
  // anything other than /add-product will run "/" app use
});

//We have app.post & app.get for post and get reqs soo ...
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
