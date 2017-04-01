//const port = process.env.PORT || 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({extended: true})); 
server.use(bodyParser.json());

server.listen(process.env.PORT || 5000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
});

module.exports = server