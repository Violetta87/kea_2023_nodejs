const express = require("express");
const app = express();

console.log(__dirname)//giver ikke et slash

//vi creater en route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontpage.html");
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