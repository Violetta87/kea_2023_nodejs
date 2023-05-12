import db from "./connection.js"

db.shops.updateOne({ city: "Roskilde" }, { $push: { shops: {name: "candybiks"}}})

const changedShops = await db.shops.find().toArray();

console.log(changedShops);