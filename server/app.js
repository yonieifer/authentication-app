import express from "express"
import cors from "cors"
import { signUp, logIn, viewUserProfile } from "./services/authService.js"
import authMiddleware from "./middleware/authMiddleware.js"
import errorHandler from "./middleware/errorHandler.js"
import logger from "./middleware/logger.js"

const app = express()

app.use(express.json())

app.use(cors())

app.use(logger)

app.post("/sign-up", async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ message: "Body is missing required fields" })
    await signUp(username, email, password)
    const token = await logIn(username, email, password)
    res.status(201).json({ token })
})

app.post("/log-in", async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ message: "Body is missing required fields" })
    const token = await logIn(username, email, password)
    res.status(201).json({ token })
})


app.get("/user-profile/:email", authMiddleware, async (req, res) => {
    const { email } = req.params
    if (!email) return res.status(400).json({ message: "email field is required" })
    const userProfile = await viewUserProfile(email)
    res.json({ user: userProfile })
})

app.get("/verify-token", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) return res.status(401).json({ message: "Authorization header missing" });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Token missing" });

    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        res.json({message: "verify"})
    }
    catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
})

app.use(errorHandler)


app.listen(process.env.PORT, () => console.log(`server is up and listening om port ${process.env.PORT}`))