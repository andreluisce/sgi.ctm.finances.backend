const Carteiras = require('../schemas/carteiras')

Carteiras.methods(['get', 'post', 'put', 'delete'])
Carteiras.updateOptions({new: true, runValidators: true})

module.exports = Carteiras
