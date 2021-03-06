'use strict'

const express = require('express')
// controlador de album
const AlbumController = require('../controllers/album.controller')
// router de express
const api = express.Router()

// definiendo rutas (@param1  = ruta, @param2 = funcion de callback)
api.get('/album/:id', AlbumController.getAlbum)
api.get('/albums', AlbumController.getAlbums)
api.post('/album', AlbumController.saveAlbum)
api.put('/album/:id', AlbumController.updateAlbum)
api.delete('/album/:id', AlbumController.deleteAlbum)

module.exports = api
