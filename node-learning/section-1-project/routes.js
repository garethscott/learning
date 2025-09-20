const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  //
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body>");
    res.write("<h3>Welcome, sign up here!</h3>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Create</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");

  res.end();
};

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'some hard coded text'
// }

// module.exports.handler = requestHandler;

// exports.handler = requestHandler;
// exports.someText = "Some hard coded text";
