const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World. The application is running.");
});

server.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
