'use strict'

const express = require('express')
// controlador de image
const ImageController = require('../controllers/image.controller')
// router de express
const api = express.Router()
// Multiparty
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart({ uploadDir: './uploads' })

// definiendo rutas (@param1  = ruta, @param2 = callback)
// api.get('/prueba', ImageController.sup)
api.get('/image/:id', ImageController.getImage)
api.get('/images/:album?', ImageController.getImages)
api.post('/image', ImageController.saveImage)
api.put('/image/:id', ImageController.updateImage)
api.delete('/image/:id', ImageController.deleteImage)

api.post('/upload-image/:id', multipartMiddleware, ImageController.uploadImage)
api.get('/get-image/:imageFile', multipartMiddleware, ImageController.getImageFile)

module.exports = api
