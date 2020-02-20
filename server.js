const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

// configurar o servidor para apresentar arquivos extras/estáticos
server.use(express.static('public'));

// habilitar o corpo/body do formulario
server.use(express.urlencoded({ extended: true }));

// configurar a conexao com o banco de dados PostgreSQL
const Pool = require('pg').Pool; // Pool mantem a conexao ativa, sem precisar fazer autenticacao a todo momento no banco
const db = new Pool({
   user: 'postgres',
   password: 'm1n3cr@wl3r',
   host: 'localhost',
   port: 5432,
   database: 'doeagasalho'
});

// configurar a template engine
nunjucks.configure('./', { express: server, noCache: true });

// Lista de doadores: Vetor ou Array
const donors = [
   {
      name: "Adriana Vieira",
      blouse: "Blusinha"
   },
   {
      name: "Leandro Vieira",
      blouse: "Blusa"
   },
   {
      name: "Carlos Alberto",
      blouse: "Calça Moletom"
   },
   {
      name: "Solange Paulino",
      blouse: "Blusa de Capuz"
   }
];

// configurar a apresentacao da pagina
server.get('/', function(req, res) {
   return res.render('index.html', { donors });
});

server.post('/', function(req, res) {
   // pegar dados do formulario
   const name = req.body.name;
   const email = req.body.email;
   const blouse = req.body.blouse;

   donors.push({ name, blouse });

   return res.redirect('/');
});

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
   console.log('Iniciei o servidor');
});
