import express from "express"
import userRouter from "./routers/userRouter.js"
import publicationRouter from "./routers/publicationRouter.js"
import { logger } from "./middlewares/logger.js"

const app = express()
const PORT = 3000

app.use(logger)
app.use(express.json())

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})
    