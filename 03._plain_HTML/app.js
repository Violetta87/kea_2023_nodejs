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
    res.send({data: getTanks()})
})

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorsCount });
})

//prefix notation
app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorsCount});
})

//klient side direction
//you can send data in two ways - query string or path variable. 
app.get("/api/guards", (req,res) => {
    if (req.query.passport === 'theskyisblue') {
        return res.redirect("/api/tanks");
        //we are trying to send headers after the are send to klient. 
        //which means the we have to return statement, 
    }
    res.send({message: "You are not allowed to see the tanks. Give us the password"});
})
//proxy server= 
app.get("/proxy", (req,res) => {
    fetch('http://www.google.com').then(response => response.text()).then(result => res.send({result}))
});




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