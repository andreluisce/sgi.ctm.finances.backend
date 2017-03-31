const restful = require('node-restful')
const mongoose = restful.mongoose

const carteirasSchema = new mongoose.Schema({
    banco: {
        type: String,
        require: true
    },
    nomeConta: {
        type: String
    },
    saldo: {
        type: Number
    }
})

module.exports = restful.model('Carteiras', carteirasSchema);