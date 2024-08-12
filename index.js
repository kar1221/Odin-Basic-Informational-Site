const http = require("node:http");
const fs = require("node:fs/promises");

http
  .createServer(async (request, response) => {
    const url = request.url;

    const makeResponse = async (file, statusCode = 200) => {
      try {
        const data = await fs.readFile(file);
        response.writeHead(statusCode, { "Content-Type": "text/html" });
        response.write(data);
      } catch (err) {
        response.writeHead("500", { "Content-Type": "text/html" });
        response.write("Internal Server Error: " + err.message);
      } finally {
        response.end();
      }
    };

    switch (url) {
      case "/":
        makeResponse("./index.html");
        break;
      case "/contacts":
        makeResponse("./contact-me.html");
        break;
      case "/about":
        makeResponse("./about.html");
        break;
      default:
        makeResponse("./404.html", 404);
        break;
    }
  })
  .listen(8080);
