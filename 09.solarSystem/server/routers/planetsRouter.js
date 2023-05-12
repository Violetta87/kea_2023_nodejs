import Router from "express";
const router = Router();
import db from "../databases/connection.js"


router.get("/planets", async (req,res) => {
    const planets = await db.query("SELECT * planets");
    console.log(planets)
    res.send({planets})
});

export default router;