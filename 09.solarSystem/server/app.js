import express from "express"
const app = express();
app.use(express.json())

import cors from "cors"

//inables if credentials and origins are true.
app.use(cors({
    credentials: true,
    origins: true
}));

import planetsRouter from "./routers/planetsRouter.js"
app.use(planetsRouter)

import peopleRouter from "./routers/peopleRouter.js"
app.use(peopleRouter)




//app.listen returns a value - 
const PORT = process.env.PORT
const PORTTWO = 8080
const server = app.listen(PORTTWO, () => {console.log("server is running on PORT: ", server.address().port)})