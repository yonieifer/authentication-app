import db from "../config/db.js"

const users = db.collection("users")

export const createUser = async (user) => {
    const {insertedId} = await users.insertOne(user)
    return insertedId.toString()
}

export const getUser = async (email) => {
    const user = await users.findOne({email})
    if (!user) return
    const {_id, ...userData} = user
    return {id: _id.toString(), ...userData}
}


