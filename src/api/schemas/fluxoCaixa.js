const restful = require('node-restful')
const mongoose = restful.mongoose

//Fluxo de Caixa usado para Despesas e Receitas
const fluxoCaixaSchema = new mongoose.Schema({
    comprovante: {
        type: String
    },
    valor: {
        type: Number
    },
    data: {
        type: Number
    },
    conta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carteira'
    },
    nomeServico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servicos'
    },
    historico: {
        type: String
    },
        natureza: {
        type: String,
        enum: ['RECEITA', 'DESPESA']
    }
})

module.exports = restful.model('FluxoCaixa', fluxoCaixaSchema);