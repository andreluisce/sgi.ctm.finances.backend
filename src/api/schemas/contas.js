const restful = require('node-restful')
const mongoose = restful.mongoose

const contasSchema = new mongoose.Schema({
    banco: {
        type: String,
        require: true,
        trim: true
    },
    nomeConta: {
        type: String,
        trim: true
    },
    saldo: {
        type: Number
    }
})

module.exports = restful.model('Contas', contasSchema);