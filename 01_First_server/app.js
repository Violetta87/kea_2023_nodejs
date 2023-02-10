const express = require("express");
//it looks for a module called express - hvis man skrev express.js - kigger
//efter et module der er i vores projekt. 
//hvis jeg vil instantiere express - skal man putte ();
//som stående nedenfor; 

//man kan skrive det i en linje

const app = require("express")();

//for at lave en server ; 
//8080 : tomcat server - http port indikere at vi udvikler- 
//get request - håndterer request. vi kan skrive en call ´back function -
//express converter javascript objekt til json, derfor sendes der et 
//javascript objekt)
//HTTP method - this entire thing is a route. 
// | //endpoint  callbackfunction (its one argument) - 
app.get("/", (req, res) =>{
    res.send({ messsage: "out first route" })

});

//hvis der ikke er et response - skriver den CANNOT GET a response

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({message: `hahaaaaajdfsdfsdf ${bicycleSpins}`});

})


app.get("/dino", (req,res) => {
    res.send({message: `dinosaur siger av av når den bliver sparket`})
})

app.get("/about", (req, res) => {
    res.send(`
    <h1>About</h1>
    <h3>This is my about my page</h3>
    `)
})
console.log("dfgdfgdfg")

app.listen(8080)

