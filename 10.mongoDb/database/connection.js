import { MongoClient } from "mongodb";

const URL = "mongodb://127.0.0.1:27017";

//connecter til client
const client = new MongoClient(URL);

console.log(client);

const db = client.db("music");

export default{
    shops: db.collection("shops"),
    artists: db.collection("artists")

}