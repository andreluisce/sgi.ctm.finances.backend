const express = require('express')

module.exports = function (server) {

    server.set('port', process.env.PORT || 8080);

    const router = express.Router()
    server.use('/api', router)

    //Rotas de Servicos
    const Servicos = require('../api/services/servicosService')
    Servicos.register(router, '/servicos')

    //Rotas de contas
    const Contas = require('../api/services/contasService')
    Contas.register(router, '/contas')

    //Rotas de Receitas
    const Receitas = require('../api/services/fluxoCaixaService')
    Receitas.register(router, '/fluxocaixa')

    //Rotas de LancamentoTitulo
    const LancamentoTitulo = require('../api/services/lancamentoTituloService')
    LancamentoTitulo.register(router, '/lancamentotitulo')

}