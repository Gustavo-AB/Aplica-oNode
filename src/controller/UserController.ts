import express, { json, Request, Response } from "express"
import { UserService } from "../services/UserService"


export class UserController {
    public createUser = (req: Request, res: Response): Response => {
        const userService = new UserService()
        const user = req.body

        if(!user.name){
            return res.status(400).json({ message: "Bad request! Name is required" })
        }

        userService.createuser(user.name, user.email)
        return res.status(201).json({ message: 'Usuario Criado' })
    }

    public getAllUsers = (req: Request, res: Response) => {
        const userService = new UserService
        const user = userService.getAllUsers()
        return res.status(200).json( user )
    }
}