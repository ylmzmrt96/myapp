const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World. The application is running.");
});

server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
