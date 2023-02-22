const mongoose = require("mongoose")

const Contato = mongoose.model("Contato",{
    nome: String,
    email: String,
    assunto: String
})

module.exports = Contato