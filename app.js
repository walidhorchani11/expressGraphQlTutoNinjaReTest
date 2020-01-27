const express = require('express');

const app = express();

//une application express est fonadamentalement une serie de fonctions appelé middleware, chaque element de middleware recoit les objets request et response , peut les lire, les analyser et les manipuler, il peut recevoir aussi la methode next pour passer au middleware suivant 

app.use((req, res, next) => {
  console.log('reqeute recus avec success');
  //passer l executio au middleware suivant
  next();
});

//2eme middlware
app.use((req, res, next) => {
  res.status(201);
  next();
});

//3eme middlware
app.use((req, res, next) => {
  res.json({message : 'votre requete a bien ete recus ...'});
  next();
});

app.use((req, res, next)=> {
  console.log('response envoyé avec success...'); 
});

module.exports = app;
