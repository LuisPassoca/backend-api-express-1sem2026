import { createPublication } from "../../models/publicationModel.js"

export async function createPubliController(req, res) {
    const publi = req.body

    const result = await createPublication(publi)

    res.json({
        message: `A publicação ${publi.title} foi criada com sucesso!`,
        user: result
    })
}