const express = require("express");
//it looks for a module called express - hvis man skrev express.js - kigger
//efter et module der er i vores projekt. 
//hvis jeg vil instantiere express - skal man putte ();
//som stående nedenfor; 

//man kan skrive det i en linje


const app = require("express")();
//hvis man gerne vil parse body - den skal forvente at det vi sender er json. 
app.use(express.json());

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

app.get("/bat", (req, res) => {
    console.log(req.query)
    res.send({ message : `bat is ${req.query.adjective}`});

});

app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params)
    res.send({ message : `bat is ${req.params.bottleSize}`});

});
//man tester ved postman(rest client) - virker ikke fordi - 
app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({message: req.body});
});

//different ways to send time
console.log(new Date());
console.log(Date())//
console.log(Date.now())//unix time

/**Time */
//zulo time - 
app.get("/time/time", (req,res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimeStamp: Date.now()

    });
});

console.log(new Date().toLocaleDateString)

//Man creater array en gang. dvs. når serveren bliver startet
const days = [, "Søndag","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "feb", "marts", "april", "maj", "juni", "juli", "august", "sep", "okt", "november", "dec"]

app.get("/time/day", (req,res) => {
    //new Date().toLocaleDateString("da-dk"), { weekday: "long" }
    res.send({ data: days[new Date().getDay()]})
})

app.get("/time/month", (req,res) => {
    res.send({ data: months[new Date().getMonth()]})
})

app.listen(8080)

