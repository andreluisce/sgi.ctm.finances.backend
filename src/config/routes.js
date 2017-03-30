const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    //Rotas de Fornecedores 
    const Fornecedores = require('../api/services/fornecedoresService')
    Fornecedores.register(router, '/fornecedores')
}