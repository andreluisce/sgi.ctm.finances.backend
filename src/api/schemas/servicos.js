const restful = require('node-restful')
const mongoose = restful.mongoose

const servicosSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
        trim: true
    },
    ativo: {
        type: String,
        enum: ['FORNECEDOR', 'PRESTADOR_SERVICO', 'CLIENTE']
    },
    cpx: { //CNPJ ou CPF
        type: Number,
        trim: true,
        index : {unique: true}
    },
    tipo: {
        type: String,
        enum: ['PESSOA_FISICA', 'PESSOA_JURIDICA']
    },
    telefone: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    endereco: {
        type: String,
        trim: true
    },
    numero: {
        type: Number,
        trim: true
    },
    complemento: {
        type: String,
        trim: true
    },
    cep: {
        type: Number,
        trim: true
    },
    bairro: {
        type: String,
        trim: true
    },
    cidade: {
        type: String,
        trim: true
    },
    estado: {
        type: String,
        trim: true
    }
})

module.exports = restful.model('Servicos', servicosSchema);