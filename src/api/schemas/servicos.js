const restful = require('node-restful')
const mongoose = restful.mongoose

const servicosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    ativo: {
        type: String,
        required: true,
        enum: ['FORNECEDOR', 'PRESTADOR_SERVICO', 'CLIENTE']
    },
    cpx: { //CNPJ ou CPF
        type: Number,
        trim: true,
        required: true,
        min: 1,
        index : {unique: true}
    },
    tipo: {
        type: String,
        required: true,
        enum: ['PESSOA_FISICA', 'PESSOA_JURIDICA']
    },
    telefone: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: Number,
        required: true,
        trim: true
    },
    complemento: {
        type: String,
        required: true,
        trim: true
    },
    cep: {
        type: Number,
        required: true,
        trim: true
    },
    bairro: {
        type: String,
        required: true,
        trim: true
    },
    cidade: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = restful.model('Servicos', servicosSchema);