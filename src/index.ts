import express, { Request, Response } from "express"
import { router } from "./routes"
import "reflect-metadata"
import { AppDataSource } from "./database"
const path = require('path')

const app = express()

app.use(express.json())
app.use(router)

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Tudo Ok!" })
})

app.listen(5000, ()=>{
    console.log("OOOBA", path)
})