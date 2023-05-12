import { Router } from 'express';
const router = Router();

import db from "../databases/connection.js"


router.post("/people", async (req,res) =>{
    console.log(req.body)
    if(!req.body.name) {
        return res.status(400).send({message: "missing the key (name) in the body"})
    }

    const result = await db.run(`INSERT INTO people (name, planet_id) VALUES (?,?)`, 
                                [req.body.name, req.body.planet_id || 3] );
    
    console.log(result);
    res.send({
        id: result.lastID,
        name: req.body.name
    })
})

router.get("/people", async (req,res) => {
    res.send({data: await db.all("SELECT * FROM people")})
})



export default router;
