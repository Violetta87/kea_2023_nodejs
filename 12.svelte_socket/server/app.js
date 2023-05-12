import express from "express";
//via express korter vi kode ned, fordi headers er allerede sat. 
const app = express();

import http from "http"
const server = http.createServer(app);

import { Server } from "socket.io"

const io = new Server();

io.on("connection", (socket) => {

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log("server is listening on PORT:", PORT))