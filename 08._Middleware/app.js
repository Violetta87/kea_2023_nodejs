import express from 'express'
//express virker ved at det første den rammer, sender den en response.
//Hvis man kalder next går man til det næste match. 
//middleware: på serveren - kører før custom callback. 
const app = express();
//det her kunne være et session check eller database check.
//En secuirty check man har på clientside, man kan altid overwrite i client. - man flytte
//functionen der checker - security altid på serveren. 
//middleware noget der kører før callback functions. 
//router is something that contains routes - we creates A dummy router - we inject it as middleware in express

app.use("/room", houseButler);

import roomRouter from './routers/roomRouters.js';
//we use a middleware function - to add - 
app.use(roomRouter);

function houseButler(req, res, next){
    console.log("This way...")
    next();
}


function guard(){
    if(req.query.name === "Anders"){
        req.myName === "Anders"
        next();   
    }else{
        res.send({ message: "You are not allowed to enter"})
    }
}

app.get("/frontDoor", guard, (req,res,next) => {
    res.send({message: `Please enter ${req.myName}` })
})


app.get("/inlinemiddleware", houseButler, (req,res, next) => {
    console.log("Enters here first");
    next();

}, (req, res, next) => {
    console.log("enters here after")
    res.send({message: "you have called the inline middleware function"})
} )


const PORT = 8080;

app.listen(PORT, (error) =>console.log("Server is running on PORT: ", PORT))