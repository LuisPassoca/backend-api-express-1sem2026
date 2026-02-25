import express from "express"
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.post('/users', (req, res) => {
    res.send('POST na rota /users')
})

app.put('/users', (req, res) => {
    res.send('PUT na rota /users')
})

app.patch('/users', (req, res) => {
    res.send('PATCH na rota /users')
})

app.delete('/users', (req, res) => {
    res.send('DELETE na rota /users')
})

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})
