var http = require('http');
var app = require('./config/configExpress');
// require('./config/database')('mongodb://localhost/alurapic');

var porta = process.env.PORT || 3000;

http.createServer(app)
.listen(porta, function() {
	console.log('Servidor ON');
});
