import { updateUser } from "../../models/userModel.js"

export async function updateUserAvatarController(req, res) {
    const { id } = req.params
    const { avatar } = req.body
    const user = {avatar}

    const result = await updateUser(+id, user)    

    if (!result) 
        return res.status(404).json({message: `Erro ao atualizar usuário ${id}!`}) 
    
    return res.json({message: 'Usuário atualizado com sucesso!', result})
}