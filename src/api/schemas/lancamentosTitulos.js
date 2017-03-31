const restful = require('node-restful')
const mongoose = restful.mongoose

const lancamentosTitulosSchema = new mongoose.Schema({
    valor: {
        type: Number
    },
    data: {
        type: Date
    },
    vencimento: {
        type: Date
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
        enum: ['PAGAR', 'RECEBER']
    }
})

module.exports = restful.model('LancamentosTitulos', lancamentosTitulosSchema);