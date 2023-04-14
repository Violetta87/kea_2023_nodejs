import dotenv from "dotenv/config"
//it reads the .env file and injects into
//in just one line its the same as these two; 
//import dotenv from "dotenv" 
//dotenv.config

import express from "express"
const app = express();

app.use(express.static)

import helmet from "helmet"
app.use(helmet())



import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}))

//problem: you push the secret - session hijacking - we need envir. variable. 
//vi kan lægge det i et script - men v
import session from "express-session"
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 min
  max: 10, //limit each IP to 100 requests per window (here 15 min per minutes)
  standardHeaders: true, //return rate limit info in the RateLimit * headers
  legacyHeaders: false, //disable the X-RateLimit headers. 
});

app.use(apiLimiter)



app.get("/gotham/:name", (req,res) =>{
    req.session.name = req.params.name;
    req.session.hobby = req.query.hobby;
    res.send({message: `Hi ${req.session.name}`})
})

app.get("/gotham", (req,res) =>{
    if(!req.session.name){
        return res.send({ message: `Error You are not welcome in this city`})
    }
    res.send({message: `I remember you ${req.session.name} and your hobby is ${req.session.hobby}`})
})

app.get("/leavegotham", (req,res) =>{
    req.session.destroy(() =>{
        res.send({});
    })
})

app.get("piblings", (req,res) =>{
    res.send({data: ["John", "Mark"]})
})

const PORT = 8080;

app.listen(PORT, (error) =>console.log("Server is running on PORT: ", PORT))
