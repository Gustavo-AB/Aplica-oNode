import { Router } from "express";
import { UserController } from "./controller/UserController"
import { Request, Response } from "express";

const userController = new UserController

export const router = Router()

router.post("/user", userController.createUser)
router.get("/user", userController.getAllUsers)
router.delete("/user", (req: Request, res: Response) => {
    const user = req.body
    console.log(user)
    return res.status(200).json({ message: "User has been delete" })
})