import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { createUser, getUser } from "../dal/usersRepo.js"
import { httpError } from "../utils.js"

export const signUp = async (username, email, password) => {
    const user = await getUser(email)
    if (user) throw httpError(400, `User ${email} already registered`)
    const hashedPassword = await bcrypt.hash(password, 12)
    const newId = await createUser({ username, email, password: hashedPassword })
    return newId
}

export const logIn = async (username, email, password) => {
    const user = await getUser(email)
    if (!user) throw httpError(404, `user ${email} not found, please sign-up`)
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword) throw httpError(400, "Incorrect password")
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
    return token
}

export const viewUserProfile = async (email) => {
    const user = await getUser(email)
    if (!user) throw httpError(404, `user ${email} not found, please sign-up`)
    const {password, ...userData} = user
    return userData
}
