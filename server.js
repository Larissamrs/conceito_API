const express = require("express")
const app = express()
const estados = require("./data/estados-cidades.json")

app.get("/", (request, response) =>{
    response.status(200).json({"mensagem": "Bem vindo(a)!"})
})

app.get("/estados/todos", (request, response) => {
    response.status(200).send(estados)
})

app.get("/estados/:sigla", (request, response) => {
    const siglaRequisitado = request.params.sigla
    console.log(siglaRequisitado)
    response.status(200).send(estados.find(estado => estado.sigla == siglaRequisitado))
})  


app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030!')
})