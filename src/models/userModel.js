import { prisma } from "../helpers/dbConnection.js";

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.user.findMany()
}

export const deleteUser = async (id) => {
    return await prisma.user.delete({where: {id}})
}

export const updateUser = async (id, user) => {
    return await prisma.user.update({where: {id}, data: user})
}


