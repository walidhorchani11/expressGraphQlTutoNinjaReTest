const express = require('express');

const app = express();

app.use((req, res)=> {
  res.json('votre requete a bien ete recus ...');
})

module.exports = app;