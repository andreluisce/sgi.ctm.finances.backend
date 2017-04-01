const Servicos = require('../schemas/servicos')
const errorHandler = require('../common/errorHandler')


Servicos.methods(['get', 'post', 'put', 'delete'])
Servicos.updateOptions({new: true, runValidators: true})

Servicos
    .after('post', errorHandler)
    .after('put', errorHandler)

Servicos.route('count',['get'], (req, res, next) => {
    Servicos.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }
        else{
            res.json({value})
        }
    })
})
module.exports = Servicos
