const http = require("http");

// function rqListener(req, res) {}
// http.createServer(rqListener); // rqlistenr will run for every req

// or

// http.createServer(function (req, res) {});

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
});

server.listen(3000);
