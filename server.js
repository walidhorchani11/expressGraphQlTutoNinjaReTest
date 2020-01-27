//importer le package http natif de node et lutiliser pour creer un serveur 
const http = require('http');

const app = require('./app');

app.set('port', process.env.PORT || 3000)


//creation du serveur on passant une fonction qui sera execute a chaque appel effectue vers ce serveur 
const server = http.createServer(app)



//config du serveur pour qu il ecoute le port 3000 ou la variable d environnement grace à process.env.PORT
server.listen(process.env.PORT || 3000);