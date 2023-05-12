import db from "./connection.js"

const foundShops = await db.shops.find({ city: "copenhagen" }).toArray();
console.log(foundShops);

