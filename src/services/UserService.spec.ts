import { UserService, User } from "./UserService"

describe("UserService", () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb)
    
    it("Deve adicionar um novo usuario", () => {
        const mockConsole = jest.spyOn(global.console, "log")
        userService.createUser("Gustavo", "gusta@teste.com")
        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb)
    })
})