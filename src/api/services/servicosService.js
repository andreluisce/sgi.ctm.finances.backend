const Servicos = require('../schemas/servicos')

Servicos.methods(['get', 'post', 'put', 'delete'])
Servicos.updateOptions({new: true, runValidators: true})

module.exports = Servicos
