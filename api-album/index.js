'use strict'
const app = require('./app')

// Instancia de mongoose
const mongoose = require('mongoose')

// validamos el puerto
let port = process.env.PORT || 3700
let mongoURL = 'mongodb://localhost/albums'

mongoose.connect(mongoURL, {useMongoCliente: true})
  .then(() => {
    console.log('BD corriendo lista')

    // ponemos a escuchar el servidor
    app.listen(port, () => {
      console.log(`API corriendo en http://localhost:${port}`)
    })
  })
  .catch(err => console.log(`Error: ${err}`))
