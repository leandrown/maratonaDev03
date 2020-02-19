const express = require('express');
const server = express();

// configurar a apresentacao da pagina
server.get('/', function(req, res) {
   return res.send('Ok, cheguei aqui com o Nodemon');
});

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
   console.log('Iniciei o servidor');
});
