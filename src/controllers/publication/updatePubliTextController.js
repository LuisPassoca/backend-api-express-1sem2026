import { updatePublication } from "../../models/publicationModel.js"

export async function updatePubliTextController(req, res) {
    const { id } = req.params
    const { text } = req.body
    const publi = { text }

    const result = await updatePublication(+id, publi)

    if (!result) 
        return res.status(404).json({message: `Erro ao atualizar publicação ${id}!`}) 
    
    return res.json({message: 'Publicação atualizada com sucesso!', result})
}