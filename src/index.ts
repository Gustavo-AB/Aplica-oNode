import express, { Request, Response } from "express"
import { router } from "./routes"
const path = require('path')

const app = express()

app.use(express.json())
app.use(router)

app.get("/", (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname) + "/index.html" )
})


app.listen(5000, ()=>{
    console.log("OOOBA", path)
})