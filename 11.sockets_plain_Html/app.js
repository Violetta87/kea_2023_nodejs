import express from "express";
const app = express();
//ved at gøre dette kan tilgå public .
app.use(express.static("public"))
//vi creater en server med http
import http from "http"
//express er compatible - 
const server = http.createServer(app);

//vi importere en klaSSE
//vi vil kombinere express server med io
import { Server } from "socket.io";
//nu har vi en enkelt server. - Server er nodejs library
//ikke http server, ikke rest, det er en socket server
//nodemon er til production
const io = new Server(server);


//hver gang en client connecter, vil jeg se noget i terminalen. 
io.on("connection", (socket) => {
    console.log("a client connectioned", socket.id)
    //skal lytte på præcis samme string - vi har to muligheder; data eller callbackfunction. 
    
    socket.on("client choose a color", (data) => {
        socket.emit("a color was choosen", data)
        console.log(data)
    })
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("server ia running on PORT:", PORT));