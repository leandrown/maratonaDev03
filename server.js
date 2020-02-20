const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

// configurar o servidor para apresentar arquivos extras/estáticos
server.use(express.static('public'));

// configurar a template engine
nunjucks.configure('./', { express: server });

// configurar a apresentacao da pagina
server.get('/', function(req, res) {
   return res.render('index.html');
});

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
   console.log('Iniciei o servidor');
});
