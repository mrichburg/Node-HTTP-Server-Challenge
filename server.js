const http = require("http")

const server = http.createServer((reques, response) => {
  response.end('Hello Galvanize')
})

const HOST = '127.0.0.1'
const PORT = 3000

server.listen(HOST, PORT, () => {
  console.log(`server running on ${HOST}:${PORT}`);
});
