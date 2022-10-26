export interface User {
    name: String
    email: String
}

let db = new Array() 

export class UserService {
    db: User[]

    constructor(database = db){
        this.db = database
    }

    public createUser = (name: String, email: String): void => {
        const user = {
            name,
            email
        }
        this.db.push(user)
        console.log("DB Atualizado", this.db)
    }

    public getAllUsers = () => {
        return this.db
    }
}