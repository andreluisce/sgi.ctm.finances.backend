const restful = require('node-restful')
const mongoose = restful.mongoose

const enderecoSchema = require('./endereco')

const fornecedoresSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    endereco: enderecoSchema,
    CNPJ: {
        type: String,
        require: true
    }
})


module.exports = restful.model('Fornecedores', fornecedoresSchema);