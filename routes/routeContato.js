const routeContato = require("express").Router()
const Contato = require("../models/Contato")

routeContato.get("/", async (req, res)=>{
    try {
        const mensagens = await Contato.find()
        res.status(201).send(mensagens)
    } catch (error) {
        res.status(500).send({message: "Nada encontrado"})
    }
})

routeContato.post("/", async (req, res)=>{
    const { nome, email, assunto } = req.body
    const contato = {nome: nome, email: email, assunto: assunto}
    try {
        await Contato.create(contato)
        res.status(201).send({message: "Mensagem enviada"})
    } catch (error) {
        res.status(500).send({message: "Nada feito"})
    }
})

module.exports = routeContato