const fs = require("fs");
const path = require("path");
const p = path.join(
  __dirname,
  "../data", // data folder
  "products.json" // name of new file
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]); //((products) => {
    } else {
      cb(JSON.parse(fileContent)); //((products) => {
    }
  });
};

module.exports = class Product {
  constructor(title) {
    console.log(this); //Product {}
    this.t = title;
    console.log(this); //Product { title: 'hi' }
  }
  save() {
    // products.push(this);
    // this is refer the obj created based on the class
    getProductsFromFile((products) => {
      // products is empty array of array with data
      console.log("products in save ", products);
      products.push(this); // should use arrow func for using 'this'
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
      // stringify : takes js obj convert to json
    });
    // const p = path.join(
    //   __dirname,
    //   "../data", // data folder
    //   "products.json" // name of new file
    // );
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //     console.log("this :", this);
    //   }
    // });
  }

  // cb = (products) => {
  //   res.render("shop", {
  //     prods: products,
  //     pageTitle: "Shop",
  //     path: "/",
  //     hasProducts: products.length > 0,
  //     activeShop: true,
  //     productCSS: true,
  //   });
  // });

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

// const P = new Product("hi");
// const P2 = new Product("bye");
// P.save();
// P2.save();
// console.log(Product.fetchAll());
