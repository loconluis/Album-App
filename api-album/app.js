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
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

//   next()
// })

// rutas base
app.use('/api', apiroutes._album)
app.use('/api', apiroutes._image)

module.exports = app
