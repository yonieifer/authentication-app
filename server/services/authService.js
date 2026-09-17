import bcrypt from "bcryptjs"
import { createUser, getUser } from "../dal/usersRepo.js"
import { httpError } from "../utils.js"

export const signUp = async (username, email, password) => {
    const user = await getUser(email)
    if (user) throw httpError(400, `User ${email} already registered`)
    const hashedPassword = await bcrypt.hash(password, 12)
    const newId = await createUser({username, email, password: hashedPassword})
    return newId
}