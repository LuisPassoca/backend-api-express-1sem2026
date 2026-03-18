import { getPublications } from "../../models/publicationModel.js";

export async function getPubliController(req, res) {
    res.json({
        message: "Publicações listadas com sucesso!",
        publications: await getPublications()
    })
}