import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI)
let db
try {
    await client.connect();
    db = client.db("authenticationDB")
} catch (error) {
    console.log(error);
}
export default db
