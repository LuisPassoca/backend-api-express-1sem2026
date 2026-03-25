import { prisma } from "../helpers/dbConnection.js";

export const createPublication = async (publi) => {
    return await prisma.publication.create({
        data: publi
    })
}

export const getPublications = async () => {
    return await prisma.publication.findMany()
}

export const deletePublication = async (id) => {
    return await prisma.publication.delete({where: {id}})
}

export const updatePublication = async (id, publi) => {
    return await prisma.publication.update({
        where: {id},
        data: publi
    })
}