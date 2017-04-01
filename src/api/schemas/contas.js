const restful = require('node-restful')
const mongoose = restful.mongoose

const contasSchema = new mongoose.Schema({
    banco: {
        type: String,
        required: true,
        trim: true
    },
    nomeConta: {
        type: String,
        required: true,
        trim: true
    },
    saldo: {
        type: Number,
        required: true
    }
})

module.exports = restful.model('Contas', contasSchema);