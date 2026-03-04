import express from "express"
import userRouter from "./routers/userRouter.js"
import postRouter from "./routers/postRouter.js"

const app = express()
const PORT = 3000

app.use('/user', userRouter)
app.use('/post', postRouter)

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})
