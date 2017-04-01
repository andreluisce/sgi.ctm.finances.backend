const restful = require('node-restful')
const mongoose = restful.mongoose

const lancamentosTitulosSchema = new mongoose.Schema({
    valor: {
        type: Number
    },
    data: {
        type: Date,
        required: true
    },
    vencimento: {
        type: Date
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
        enum: ['PAGAR', 'RECEBER'],
        required: true
    }
})

module.exports = restful.model('LancamentosTitulos', lancamentosTitulosSchema);