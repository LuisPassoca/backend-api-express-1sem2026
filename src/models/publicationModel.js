import { prisma } from "../helpers/dbConnection.js";

export const createPublication = async (publi) => {
    return await prisma.publication.create({
        data: publi
    })
}

export const getPublications = async () => {
    return await prisma.publication.findMany()
}
