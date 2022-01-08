const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body> <form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button> </form> </body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // on is listening to data event
      console.log(chunk); // output : <Buffer 6d 65 73 73 61 67 65 3d 77 71 65 71 65>
      body.push(chunk);
    });

    req.on("end", () => {
      // happen when its done parsing the incoming req data
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); // outPut : message=wqeqe // message is becuse  we name the input to message
      const message = parsedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message); // next lines will run after SyncFileWrite happen
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; // status code of 302 is for redirection
        // res.setHeader("Location", "/");
        return res.end();
        // (err) func will run after we complete writing the file
      });
    });
  }
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html"); // tell the browser
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body> <h1>Hello from Node JS </h1></body>");
  res.write("</html>");
  res.end();
};

//export this func

module.exports = requestHandler;
// // or
// module.exports = {
//   handler: requestHandler,
//   someText: "Some Hard coded text",
// };
// // or
// module.exports.handler = requestHandler;
// module.exports.someText = "some dummy text ";
