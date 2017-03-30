const restful = require('node-restful')
const mongoose = restful.mongoose

const enderecoSchema = new mongoose.Schema({
    endereco: {
        type: String,
        require: true
    },
    numero: {
        type: String,
        require: true
    },
    complemento: {
        type: String,
        require: false
    },
    cep: {
        type: Number,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    Estado: {
        type: String,
        require: true
    }
});

module.exports = restful.model('Endereco', enderecoSchema);