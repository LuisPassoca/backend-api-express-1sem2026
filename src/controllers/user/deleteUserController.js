import { deleteUser } from "../../models/userModel.js"

export async function deleteUsersController(req, res) {
    const { id } = req.params
    const result = await deleteUser(+id)
   
    if (!result) 
        return res.status(404).json({message: `Erro ao deletar usuário ${id}!`}) 
    
    return res.json({message: 'Usuário deletado com sucesso!', result})
}