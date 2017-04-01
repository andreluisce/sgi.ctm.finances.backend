const LancamentoTitulo = require('../schemas/lancamentosTitulos')
const errorHandler = require('../common/errorHandler')

LancamentoTitulo.methods(['get', 'post', 'put', 'delete'])
LancamentoTitulo.updateOptions({new: true, runValidators: true})

LancamentoTitulo
    .after('post', errorHandler)
    .after('put', errorHandler)

module.exports = LancamentoTitulo
