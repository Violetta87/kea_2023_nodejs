const express = require("express");
//vi importerer library

//vi instantierer express
const app = express();

//vi simulerer en table
const birds = [
    {id: 1, name: "Violet-backed starling", maleRating: 10, femaleRating: 2 }
];


//vi definerer et endpoint
//callback funtion tager to parametre ; hører vi fra klient /server modellen. 
app.get("/birds", (req, res) => {
    res.send({data: birds});
});

app.get("/birds/:id", (req,res)=>{
    console.log(req.params.id);

    //map giver os one to one
    //filter giver os mindre birds- giver os altid et array
    //find giver os et element. 
    //vi bliver nødt til at converter, eftersom alt i urlbar er en string,
    //og her er vores id et number

    const foundbird = birds.find(bird => bird.id === Number(req.params.id));
    //det er altid bedre at sende data som key, når man rent faktisk skal sende data
    //man bruger message, hvis der rent faktisk er en message. 
    res.send({data: foundbird});
});

//vi lytter på porten og vi kan adde et callback så vi ved at serveren lytter. 
//callback function = tilføjet som et argument til et andet stykke kode. 
app.listen(8080, () => {
    console.log("server is running on port", 8080)
});
