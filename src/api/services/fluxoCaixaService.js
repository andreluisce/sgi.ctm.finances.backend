const FluxoCaixa = require('../schemas/fluxoCaixa')

FluxoCaixa.methods(['get', 'post', 'put', 'delete'])
FluxoCaixa.updateOptions({new: true, runValidators: true})

module.exports = FluxoCaixa
