import express from "express"
import { signUp, logIn, viewUserProfile } from "./services/authService.js"
import authMiddleware from "./middleware/authMiddleware.js"

const app = express()

app.use(express.json())

app.post("/sign-up", async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ message: "Body is missing required fields" })
    await signUp(username, email, password)
    res.status(201).json({ message: "Successfully registered" })
})

app.post("/log-in", async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ message: "Body is missing required fields" })
    const token = await logIn(username, email, password)
    res.status(201).json({ token })
})


app.get("/user-profile", authMiddleware, async (req, res) => {
    const { email } = req.body
    if (!email) return res.status(400).json({ message: "email field is required" })
    const userProfile = await viewUserProfile(email)
    res.json({ user: userProfile })
})

// app.get("/") אותוריזציה

app.listen(process.env.PORT, () => console.log(`server is up and listening om port ${process.env.PORT}`))