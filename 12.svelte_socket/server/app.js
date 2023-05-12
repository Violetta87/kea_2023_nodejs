import express from "express";
//via express korter vi kode ned, fordi headers er allerede sat. 
const app = express();

import http from "http"
const server = http.createServer(app);

import session from "express-session"
app.use(session({
    secret: 'keyboard cat',
    resave: 'false',
    saveUninitialized: true,
    cookie: { secure:false }
}))

import cors from "cors"
app.use(cors({
    credentials: true,
    origin: true
}));

import { Server } from "socket.io"

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

io.on("connection", (socket) => {
    socket.on("a client choose a color", (data) => {
        io.emit("a clien just droppend")
    })

});
//route til at finde user. 
app.get("/users/me", (req,res) => {
    res.send({data: req.session.username});
})
//rouute til at registree user
app.post("/register", (req,res) => {
    req.session.username = req.body
    res.send({data: req.body.username})
});


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log("server is listening on PORT:", PORT))