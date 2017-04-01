const express = require('express')

module.exports = function (server) {

    const router = express.Router()
    server.use('/api', router)

    //Rotas de Servicos
    const Servicos = require('../api/services/servicosService')
    Servicos.register(router, '/servicos')

    //Rotas de Carteiras
    const Carteiras = require('../api/services/carteirasService')
    Carteiras.register(router, '/carteiras')

    //Rotas de Receitas
    const Receitas = require('../api/services/fluxoCaixaService')
    Receitas.register(router, '/fluxocaixa')

        //Rotas de LancamentoTitulo
    const LancamentoTitulo = require('../api/services/lancamentoTituloService')
    LancamentoTitulo.register(router, '/lancamentotitulo')

}