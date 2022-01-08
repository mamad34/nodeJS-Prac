const express = require("express");

const app = express();

// use allow us to add a middleware func
// func inside the app.use will execute for every incoming req
// func recieve 3 args
app.use((req, res, next) => {
  console.log("in the middleWare ");
  next(); // Alows the request to continue to the next middleWare in line
});
app.use((req, res, next) => {
  console.log("in the second middleWare ");
  // instead of setHeader & Write we use send (allow us to send a respons)
  res.send("<h1>Hello from express</h1>");
});

// const server = http.createServer(app);
// server.listen(4000, () => {
//   console.log("SERVER READY AT PORT 4000");
// });

app.listen(3000);
