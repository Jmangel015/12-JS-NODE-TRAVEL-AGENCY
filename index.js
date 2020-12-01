//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log(error));

//HAbilitar PUG
app.set('view engine', 'pug');
//Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.ActualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia De Viajes';
  return next();
});
//Agregar body parser para ver los datos del formulario
app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static('public'));
//Agregar Router
app.use('/', router);

//Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
//Definir puerto
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
  console.log('El servidor esta funcionando');
});
