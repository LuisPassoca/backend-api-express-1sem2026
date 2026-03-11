import { createUser } from "../../models/userModel.js";

export async function createUserController(req, res) {
    
    const user = {
        avatar: "https://github.com/luispassoca.png",
        name: "Luis Passoca",
        email: "luispassoca@sample.com",
        pass: "açúcar"
    }

    const result = await createUser(user)

    res.json({
        message: `O usuário ${user.name} foi criado com sucesso!`,
        user: result
    })
}