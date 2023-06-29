const express = require('express');
const routes = express.Router();
const Usuario = require('../models/user');
const { use } = require('express/lib/application');

function createRoute(){
    routes.post('/usuarios', async (req, res) => {
        console.log("Create: ",req.body);
        await Usuario.create(req.body);
        res.json([]);

    })
}


function findByIdRoute(){
    routes.get('/usuarios/:id',async (req, res) => {
        console.log("procura por id: ",req.params);
        res.json([await Usuario.findOne({
            where:{
                id: req.params.id
            }
        })]);

    })
}

function updateRoute(){
    routes.put('/usuarios/:id', async (req, res) => {
        await Usuario.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.json(["update: ", req.body]);

    })
}

function removeRoute(){
    routes.delete('/usuarios/:id', async (req, res) => {
        console.log("delete: ",req.params)
        await Usuario.destroy(
            {
                where:{
                    id : req.params.id
                }
            }
        )
        res.json([]);
    })
}

function findAllRoute(){
    routes.get('/usuarios', async (req, res) => {
        res.json(await Usuario.findAll());
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