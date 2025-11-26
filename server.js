const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Keith Danielle O. Reyes\n");
  res.write("BA-4102\n");
  res.write("If things get worse, drink red horse\n");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
