const restful = require('node-restful')
const mongoose = restful.mongoose

//Fluxo de Caixa usado para Despesas e Receitas
const fluxoCaixaSchema = new mongoose.Schema({
    comprovante: { //This is URL of the Receipt image
        type: String
    },
    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    conta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true
    },
    nomeServico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servicos',
        required: true
    },
    historico: {
        type: String,
        trim: true
    },
        natureza: {
        type: String,
        enum: ['RECEITA', 'DESPESA'],
        required: true
    }
})

module.exports = restful.model('FluxoCaixa', fluxoCaixaSchema);