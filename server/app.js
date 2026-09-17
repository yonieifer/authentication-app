import express from "express"
import { signUp } from "./services/authService.js"

const app = express()

app.use(express.json())

app.post("/sign-up", async (req, res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password) return res.status(400).json({message: "Body is missing required fields"})
    await signUp(username, email, password)
    res.status(201).json({message: "Successfully registered"})
})

app.post("/log-in", (req, res) => {})

app.get("/user-profile", (req, res) => {})

// app.get("/") אותוריזציה

app.listen(process.env.PORT, () => console.log(`server is up and listening om port ${process.env.PORT}`))