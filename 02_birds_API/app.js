const express = require("express");
//vi importerer library

//vi instantierer express
const app = express();

//vi simulerer en table
const birds = [
    {id: 1, name: "Violet-backed starling", maleRating: 10, femaleRating: 2 }
];

let currentId = 1;


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

app.post("/birds", (req,res) => {
    const birdTOBeCreated = req.body
    birdTOBeCreated.id = ++currentId
    birds.push(birdTOBeCreated)
    res.send({ data: birdTOBeCreated});
    
    res.send({data: foundBird})
});

app.delete("/birds/:id", (req, res) => {
    const id = req.params.id
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if(foundIndex === -1){
        res.status(404).send({data : foundIndex, message: `No birds found with id: ${req.params.id} `})
    }else{
        const deletedBird = birds.splice(foundIndex, 1);
        res.send({data: deletedBird});
    }
})

app.patch("/birds/:id", (req,res) => {
    const id = req.params.id
    const foundIndex = birds.findIndex(bird => bird.id === Number(id))
    if(foundIndex === -1){
        res.status(404).send({message: `No bird found by id : ${id} `})
    }else{
        //we overwrite the the req.body with the object found from req.params.id
        const foundBird = birds[foundIndex];
        const birdToBeUpdated = { ...foundBird, ...req.body , id: foundBird.id};
        birds[foundIndex] = birdToBeUpdated
        res.send({ data: birdToBeUpdated})
    }
});

//vi lytter på porten og vi kan adde et callback så vi ved at serveren lytter. 
//callback function = tilføjet som et argument til et andet stykke kode. 
app.listen(8080, () => {
    console.log("server is running on port", 8080)
});
