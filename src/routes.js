const express = require('express');
const { Model } = require('sequelize');
const route = express.Router();

const registerUsuariosRoutes = require('./usuarios/controllers/usuarios-controller.js')
route.use(registerUsuariosRoutes())

module.exports = route