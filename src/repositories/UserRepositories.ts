import { EntityManager } from "typeorm"
import { AppDataSource } from "../database"
import { User } from "../entities/User"

export class UserRepositorie {
    private manager: EntityManager

    constructor(
        manager = AppDataSource.manager 
    ){
        this.manager = manager
    }

    createUser = async (user:User)=>{
        // const newUser = this.manager.create(user)

        return this.manager.save(user)
    }
}