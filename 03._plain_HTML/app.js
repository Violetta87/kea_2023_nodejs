import express from "express"
const app = express();

import router from "./router/router.js";
app.use(router)

import path from "path"

//vi sætter public som vores static folder - klienten må gerne tage filer. 
//klient skal aldrig få adgang til serverside. 
//klient kan ikke røre andet end public folder. 
app.use(express.static("public"));

//const { getTanks, addTanks } = require("./util/tanks.js");
//console.log(tanksUtil.getTanks);


let visitorsCount = 0;

//console.log(__dirname)//giver ikke et slash
//console.log("hej" + __dirname)

/**Pages */

//vi creater en route
app.get("/", (req, res) => {
    res.sendFile(path.resolve("/public/frontpage/frontpage.html"));
});

app.get("/tanks", (req, res) =>{
    res.sendFile(path.resolve("/public/tanks/tanks.html"))
});

app.get("/visitors", (req,res) => {
    res.sendFile(path.resolve("/public/visitors/visitors.html"))
})

app.get("/museumGuards", (req,res) => {
    res.sendFile(path.resolve("/public/museumGuards/museumGuards.html"))    
})




//caps - fordi den er const og skal ikke ændres
//listen function tager parametre error, og derved kan vi håndtere errors.
//error = datatypen: undefined - 
const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error)
        return
    }
    console.log("server is running on port", PORT)
});