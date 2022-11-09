import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    migrations: ["./src/database/migrations/*.ts"]
    
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source foi inicializado!")
    })
    .catch((error) => {
        console.error(error)
    })

