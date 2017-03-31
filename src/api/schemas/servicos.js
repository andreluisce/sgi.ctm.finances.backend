const restful = require('node-restful')
const mongoose = restful.mongoose

const servicosSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    ativo: {
        type: String,
        enum: ['FORNECEDOR', 'PRESTADOR_SERVICO', 'CLIENTE']
    },
    cnpj: {
        type: Number
    },
    cpf: {
        type: Number
    },
    telefone: {
        type: Number
    },
    email: {
        type: String
    },
    endereco: {
        type: String
    },
    numero: {
        type: Number
    },
    complemento: {
        type: String
    },
    cep: {
        type: Number
    },
    bairro: {
        type: String
    },
    cidade: {
        type: String
    },
    estado: {
        type: String
    }
})

module.exports = restful.model('Servicos', servicosSchema);