import { createUserController } from "../controllers/user/createUserController.js"
import { deleteUsersController } from "../controllers/user/deleteUserController.js"
import { getUsersController } from "../controllers/user/getUsersController.js"
import { updateUserAvatarController } from "../controllers/user/updateUserAvatarController.js"
import { updateUserController } from "../controllers/user/updateUserController.js"
import express from "express"
const router = express.Router()

router.get('/', getUsersController)
router.post('/', createUserController)
router.put('/:id', updateUserController)
router.patch('/:id', updateUserAvatarController)
router.delete('/:id', deleteUsersController)

export default router