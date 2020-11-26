//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//HAbilitar PUG
app.set('view engine', 'pug');
//Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.ActualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia De Viajes';
  return next();
});
//Definir la carpeta publica
app.use(express.static('public'));
//Agregar Router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
