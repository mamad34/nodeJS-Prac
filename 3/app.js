const express = require("express");

const bodyParser = require("body-parser");
// npm install --save body-barser

const app = express();

app.set("view engine", "pug");
// app set let us set any value globally
// view engine tells express for any dynamic template
// trying to render use this engine (pug)
app.set("views", "views");
// & views allows us to tell express where to find these dynamic views
// second views is the views folder in project
const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const req = require("express/lib/request");

const path = require("path");

// use allow us to add a middleware func
// func inside the app.use will execute for every incoming req
// // func recieve 3 args
//*************/
// app.use((req, res, next) => {
//   console.log("in the middleWare ");
//   next(); // Alows the request to continue to the next middleWare in line
// });
//************/

// app.use("/", (req, res, next) => {
//   console.log("this always runs");
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false })); // this is included by some middlewares that
//use next() to run all the other middleWare below and it will give us the body of reqs

app.use(express.static(path.join(__dirname, "public"))); // this will serve static files
// with this user can access to the public path
// it will take any req that tryes to find some file
// it will forward the req to the public folder
app.use("/admin", adminRoutes.routes); // only routes start with admin will go to the adminroutes
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});
// const server = http.createServer(app);
// server.listen(4000, () => {
//   console.log("SERVER READY AT PORT 4000");
// });

app.listen(3000, () => {
  console.log("Server Started");
});
