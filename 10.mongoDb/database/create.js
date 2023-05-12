import db from "./connection.js"

const createShops = await db.shops.insertOne({ city: "Roskilde", shops: [] });

console.log(createShops)