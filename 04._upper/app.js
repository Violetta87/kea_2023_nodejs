import express from "express"
const app = express();
//Behøves ikke med require som er en del af nodejs
//const jokes = require("./util/jokes")
//Når man skriver egma script import, skal der skrives jokes.js
//__dirname = findes i nodejs
import path from "path"
//


//sync = it will not go to the next line. server skal ikke starte før alle files er syncroniseret
//vi skal konverte til tostring da readfilesync giver byte stream. 
//console.log(frontpagePage)
//components = structure that we reuse - bricks, containers. navbar, footer, header, 

import templateEngine from "./util/templateEngine.js"

app.use(express.urlencoded({extended: true}));

//constructed pages
const frontpagePath = templateEngine.readPage("./public/pages/frontpage/frontpage.html")
const frontpagePage = templateEngine.renderPage(frontpagePath, {
    tapTitle : "Welcome"
})



const IRLQUESTPath = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html")
const IRLQuestsPagePage = templateEngine.renderPage(IRLQUESTPath, {
    tapTitle: "IRLQUEST"
});

const contactPath = templateEngine.readPage("./public/pages/contact/contact.html")
const contactPage = templateEngine.renderPage(contactPath, {
    tapTitle: "contact"
})


//now we server send the page, and not just a file.
console.log(path.resolve("public/pages/frontpage/frontpage.html"))
app.use(express.static('public'));


app.get("/", (req,res) => {
    res.send(frontpagePage)
});

app.get("/quest", (req, res) => {
    res.send(IRLQuestsPagePage)
    
})

//create a joke page and serve it. 
app.get("/jokes", async (req,res) => {
    res.send(await templateEngine.renderJokePage())
})

app.get("/contact", (req,res) => {
    res.send(contactPage)
})


/**API */

app.post("/api/contact", (req,res) =>{
    console.log(req.body)
    res.send(req.body)
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log(error, "Server is not working")
        return
    }
    console.log("Server is running on PORT : ", PORT)
})