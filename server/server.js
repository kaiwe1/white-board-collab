const express = require("express")
const http = require("http")
const { Server } = require("socket.io");

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
      origin: "http://127.0.0.1:5173"
    }
  });

io.on("connection", (socket) => {
    console.log('a user connected');
    socket.on("canvas-data", (data) => {
        socket.broadcast.emit("canvas-data", data)
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})