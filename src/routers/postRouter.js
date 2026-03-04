import express from "express"
import { getPostsController } from "../controllers/post/getPostsController.js"
import { createPostController } from "../controllers/post/createPostController.js"
import { updatePostController } from "../controllers/post/updatePostController.js"
import { updatePostTextController } from "../controllers/post/updatePostTextController.js"
import { deletePostController } from "../controllers/post/deletePostController.js"
const router = express.Router()

router.get('/', getPostsController)
router.post('/', createPostController)
router.put('/', updatePostController)
router.patch('/', updatePostTextController)
router.delete('/', deletePostController)

export default router

