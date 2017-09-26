'use strict'

const express = require('express')
// controlador de album
const ImageController = require('../controllers/image.controller')
// router de express
const api = express.Router()

// definiendo rutas (@param1  = ruta, @param2 = funcion de callback)
api.get('/prueba', ImageController.sup)

// api.get('/album/:id', ImageController.getAlbum)
// api.get('/albums', ImageController.getAlbums)
// api.post('/album', ImageController.saveAlbum)
// api.put('/album/:id', ImageController.updateAlbum)
// api.delete('/album/:id', ImageController.deleteAlbum)

module.exports = api
