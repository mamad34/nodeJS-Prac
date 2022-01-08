const http = require("http");
const routes = require("./routes");

// function rqListener(req, res) {}
// http.createServer(rqListener); // rqlistenr will run for every req

// or

// http.createServer(function (req, res) {});

const server = http.createServer(routes);
// run the function stored in routes for incoming req

server.listen(4000, () => {
  console.log("SERVER READY AT PORT 4000");
});

// npm nodemon --save-dev
