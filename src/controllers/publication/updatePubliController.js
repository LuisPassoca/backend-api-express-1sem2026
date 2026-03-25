import { updatePublication } from "../../models/publicationModel.js"

export async function updatePubliController(req, res) {
    const { id } = req.params
    const publi = req.body

    const result = await updatePublication(+id, publi)

    if (!result) 
        return res.status(404).json({message: `Erro ao atualizar publicação ${id}!`}) 
    
    return res.json({message: 'Publicação atualizada com sucesso!', result})
}

