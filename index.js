const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const router = jsonServer.router(require("./src/index.js"));

server.use(middlewares);
server.use("/api", router);

server.listen(3000, function () {
  console.log("Server is up and running...");
});
