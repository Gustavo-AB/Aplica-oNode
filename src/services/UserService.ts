import { AppDataSource } from "../database"
import { UserRepositorie } from "../repositories/UserRepositories"
import { User } from "../entities/User"


export class UserService {
    private UserRepositorie: UserRepositorie

    constructor(
        userRepositorie = new UserRepositorie(AppDataSource.manager)
    ){
        this.UserRepositorie = userRepositorie
    }

    public createUser = async (name:string, email:string, password:string): Promise<User> => {
        const user = new User(name, email, password)

        return await this.UserRepositorie.createUser(user)
    }

    public deleteUser = () => {

        console.log("Usuario Deletado.")
    }

    public getAllUsers = () => {
        return 'testel'
    }
}