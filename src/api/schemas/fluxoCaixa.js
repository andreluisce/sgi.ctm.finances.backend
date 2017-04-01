const restful = require('node-restful')
const mongoose = restful.mongoose

//Fluxo de Caixa usado para Despesas e Receitas
const fluxoCaixaSchema = new mongoose.Schema({
    comprovante: { //This is URL of the Receipt image
        type: String
    },
    valor: {
        type: Number
    },
    data: {
        type: Date
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
        type: String,
        trim: true
    },
        natureza: {
        type: String,
        enum: ['RECEITA', 'DESPESA']
    }
})

module.exports = restful.model('FluxoCaixa', fluxoCaixaSchema);