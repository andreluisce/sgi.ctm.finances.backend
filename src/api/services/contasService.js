const Contas = require('../schemas/contas')
const errorHandler = require('../common/errorHandler')

Contas.methods(['get', 'post', 'put', 'delete'])
Contas.updateOptions({new: true, runValidators: true})
Contas.after('post', errorHandler)
        .after('put', errorHandler)

module.exports = Contas
