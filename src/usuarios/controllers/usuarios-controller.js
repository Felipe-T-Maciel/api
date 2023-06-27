const express = require('express');
const routes = express.Router();
const Usuario = require('../models/user')

function createRoute(){
    routes.post('/usuarios', async (req, res) => {
        console.log("Create: ",req.body);
        await Usuario.create(req.body);
        res.json([]);

    })
}


function findByIdRoute(){
    routes.get('/usuarios/:id', (req, res) => {
        console.log("procura por id: ",req.params)
        res.json([]);

    })
}

function updateRoute(){
    routes.put('/usuarios', (req, res) => {
        console.log("update: ",req.body)
        res.json([]);

    })
}

function removeRoute(){
    routes.delete('/usuarios', (req, res) => {
        console.log("delete: ",req.params)
        res.json([]);

    })
}

function findAllRoute(){
    routes.get('/usuarios', (req, res) => {
        res.json([]);

    })
}

registerRoutes()

function registerRoutes(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes;
}

module.exports = registerRoutes