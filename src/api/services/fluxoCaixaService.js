const FluxoCaixa = require('../schemas/fluxoCaixa')
const errorHandler = require('../common/errorHandler')

FluxoCaixa.methods(['get', 'post', 'put', 'delete'])
FluxoCaixa.updateOptions({new: true, runValidators: true})

FluxoCaixa
    .after('post', errorHandler)
    .after('put', errorHandler)

FluxoCaixa.route('summary', ['get'], (req, res, next) => {
    res.json( {
            credit: 100,
            debt: 50
        }
    )
})

module.exports = FluxoCaixa
