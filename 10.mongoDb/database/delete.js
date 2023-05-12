import db from "./connection.js"

await db.shops.deleteMany({ city: "Roskilde" })
await db.artists.deleteMany({ name: "cam"})
//console.log(await db.shops.find().toArray())
console.log(await db.artists.find().toArray())