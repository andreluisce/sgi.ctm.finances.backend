const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://andreluisce:alce6582@ds145750.mlab.com:45750/sgi-ctm-finances');
