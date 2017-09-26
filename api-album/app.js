'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// carga de rutas

// para que todo trabaje como un json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// configurar cabeceras

// rutas base

module.exports = app
