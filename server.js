//importer le package http natif de node et lutiliser pour creer un serveur 
const http = require('http');

//creation du serveur on passant une fonction qui sera execute a chaque appel effectue vers ce serveur 
const server = http.createServer((req, res) => { 
  console.log('server run now'); 
  res.end('our server is run..nnnnn.');
  
})

server.listen(process.env.PORT || 3000);