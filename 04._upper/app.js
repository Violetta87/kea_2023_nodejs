import express from "express"
const app = express();
//Behøves ikke med require som er en del af nodejs
//const jokes = require("./util/jokes")
//Når man skriver egma script import, skal der skrives jokes.js
//__dirname = findes i nodejs
import path from "path"

console.log(path.resolve("public/pages/frontpage/frontpage.html"))

//import jokes from "./util/jokes"


app.get("/", (req,res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get("/quest", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"))
    
})





const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error, "Server is not working")
        return
    }
    console.log("Server is running on PORT : ", PORT)
})