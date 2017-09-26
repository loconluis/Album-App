'use strict'

const express = require('express')
// controlador de image
const ImageController = require('../controllers/image.controller')
// router de express
const api = express.Router()

// definiendo rutas (@param1  = ruta, @param2 = funcion de callback)
// api.get('/prueba', ImageController.sup)
api.get('/image/:id', ImageController.getImage)
// api.get('/albums', ImageController.getAlbums)
api.post('/image', ImageController.saveImage)
// api.put('/album/:id', ImageController.updateAlbum)
// api.delete('/album/:id', ImageController.deleteAlbum)

module.exports = api
