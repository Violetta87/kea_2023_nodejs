import { Router } from "express";
const router = Router();


/**API */

//URL indikerer at vi sender data JSON, evt. version sættes på -
router.get("/api/tanks", (req,res) => {
    res.send({data: getTanks()})
})

router.get("/api/visitors", (req, res) => {
    res.send({ data: visitorsCount });
})

//prefix notation
router.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorsCount});
})

//klient side direction
//you can send data in two ways - query string or path variable. 
router.get("/api/guards", (req,res) => {
    if (req.query.passport === 'theskyisblue') {
        return res.redirect("/api/tanks");
        //we are trying to send headers after the are send to klient. 
        //which means the we have to return statement, 
    }
    res.send({message: "You are not allowed to see the tanks. Give us the password"});
})
//proxy server= 
router.get("/proxy", (req,res) => {
    fetch('http://www.google.com').then(response => response.text()).then(result => res.send(result))
});

export default router; 
