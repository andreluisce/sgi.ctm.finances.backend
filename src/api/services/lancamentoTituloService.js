const LancamentoTitulo = require('../schemas/lancamentosTitulos')

LancamentoTitulo.methods(['get', 'post', 'put', 'delete'])
LancamentoTitulo.updateOptions({new: true, runValidators: true})

module.exports = LancamentoTitulo
