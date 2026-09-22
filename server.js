const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/localconfig.json") {
    const data = fs.readFileSync("localconfig.json", "utf8");
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(data);
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Local config server aktif");
});

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server berjalan di port ${port}`);
});
