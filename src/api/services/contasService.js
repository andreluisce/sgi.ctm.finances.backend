const Contas = require('../schemas/contas')

Contas.methods(['get', 'post', 'put', 'delete'])
Contas.updateOptions({new: true, runValidators: true})

module.exports = Contas
