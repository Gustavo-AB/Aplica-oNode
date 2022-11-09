import express, { Request, Response } from "express"
import { router } from "./routes"
import "reflect-metadata"
import { AppDataSource } from "./database"
const path = require('path')

const app = express()

app.use(express.json())
app.use(router)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source foi inicializado!")
    })
    .catch((error) => {
        console.error(error)
    })


app.get("/", (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname) + "/index.html" )
})


app.listen(5000, ()=>{
    console.log("OOOBA", path)
})