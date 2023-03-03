const express = require("express");
const app = express();

//vi sætter public som vores static folder - klienten må gerne tage filer. 
//klient skal aldrig få adgang til serverside. 
//klient kan ikke røre andet end public folder. 
app.use(express.static("public"));

const { getTanks, addTanks } = require("./util/tanks.js");
//console.log(tanksUtil.getTanks);


let visitorsCount = 0;

console.log(__dirname)//giver ikke et slash

/**Pages */

//vi creater en route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) =>{
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

app.get("/visitors", (req,res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
})

app.get("/museumGuards", (req,res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html")    
})



/**API */

//URL indikerer at vi sender data JSON, evt. version sættes på -
app.get("/api/tanks", (req,res) => {
    console.log(tanks)
    res.send({data: tanks})
})

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorsCount });
})

//prefix notation
app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorsCount})
})



//caps - fordi den er const og skal ikke ændres
//listen function tager parametre error, og derved kan vi håndtere errors.
//error = datatypen: undefined - 
const PORT = 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error)
        return
    }
    console.log("server is running on port", PORT)
});