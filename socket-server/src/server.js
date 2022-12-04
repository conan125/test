const app = require("express")();
const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    // 处理跨域问题
    origin: "http://localhost:4200", // angular项目的启动端口，默认4200，本人项目的启动端口为4300，大家根据自己情况修改
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("add-message", (message) => {
    console.log("message", message);
    io.emit("message", { type: "new-message", text: message });
  });
  socket.on("disconnection", (socket) => {
    console.log("user disconnected");
  });
});

http.listen(4000, () => {
  // 后台服务启动端口
  console.log("start on 4000....");
});
