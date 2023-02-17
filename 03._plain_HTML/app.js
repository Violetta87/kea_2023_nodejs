const express = require("express");
const app = express();

//vi sætter public som vores static folder - klienten må gerne tage filer. 
//klient skal aldrig få adgang til serverside. 
app.use(express.static("public"));



console.log(__dirname)//giver ikke et slash

//vi creater en route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) =>{
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});



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