'use strict'

const Album = require('../models/album.model')

function getAlbum (req, res) {
  let albumID = req.params.id

  Album.findById(albumID, (err, album) => {
    // Manejo del error
    if (err) { return res.status(500).send({ message: 'Error en el servidor ' + err }) }
    // Si no existe el dato
    if (!album) { return res.status(404).send({ message: 'No existe el album' }) }
    // respuesta exitosa
    res.status(200).send({ album })
  })
}

function getAlbums (req, res) {
  Album.find({}, (err, albums) => {
    // Manejo del error
    if (err) { return res.status(500).send({ message: 'Error en el servidor ' + err }) }
    // Si no existe el dato
    if (!albums) { return res.status(404).send({ message: 'No hay datos en la colección' }) }
    // respuesta exitosa
    res.status(200).send({ albums })
  })
}

module.exports = {
  getAlbum,
  getAlbums
}
