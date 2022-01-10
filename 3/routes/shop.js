const express = require("express");

const router = express.Router();

const adminData = require("./admin");

const path = require("path");

router.get("/", (req, res, next) => {
  console.log("in the other middleWare ");
  console.log("shopJS", adminData.products);
  // instead of setHeader & Write we use send (allow us to send a respons)
  // ****************
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // ****************
  // ************//
  // we cant use html file because ./ is pointin to root of OS so we use something else
  // so we use path and concat the path with join and use __dirname (dirname holds
  // absolute paths on our OS in this project folder) to use the html file
  // path join find the correct path in any Os like linux an win so we use it
  // to find out pathes
  // ../ means that go to upper directory and find correct folder
  //**************//
  // using pug
  const products = adminData.products;
  res.render("shop.pug", { prods: products, docTitle: "Shop" }); // second arg is for passing data throw our pug page
});

module.exports = router;
