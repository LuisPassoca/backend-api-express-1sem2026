import { getUsers } from "../../models/userModel.js"

export async function getUsersController(req, res) {
    res.json({
        message: "Usuários listados com sucesso!",
        users: await getUsers()
    })
}