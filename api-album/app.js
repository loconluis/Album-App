'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// carga de rutas
const apiroutes = require('./routes')

// para que todo trabaje como un json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// configurar cabeceras

// rutas base
app.use('/api', apiroutes._album)
app.use('/api', apiroutes._image)

module.exports = app
