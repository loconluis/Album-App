'use strict'
const Image = require('../models/image.model')
const Album = require('../models/album.model')

// function sup (req, res) {
//   return res.status(200).send({message: 'WAZAAAP'})
// }

function getImage (req, res) {
  let imageID = req.params.id

  Image.findById(imageID, (err, image) => {
    // Manejo del error
    if (err) { return res.status(500).send({ message: 'Error en el servidor ' + err }) }
    // Si no existe el dato
    if (!image) { return res.status(404).send({ message: 'No existe la imagen' }) }
    // respuesta exitosa
    Album.populate(image, { path: 'album' }, (err, data) => {
      if (err) { return res.status(500).send({ message: 'Error en la peticion ' + err }) }
      // devuelve un objeto ya con los datos anidados
      res.status(200).send({ image: data })
    })
  })
}

function getImages (req, res) {
  let albumID = req.params.album
  let find

  if (!albumID) {
    // sacar todas las imagenes
    find = Image.find({}).sort('title')
  } else {
    find = Image.find({ album: albumID }).sort('title')
  }

  find.exec((err, images) => {
      // Manejo del error
    if (err) { return res.status(500).send({ message: 'Error en el servidor ' + err }) }
      // Si no existe el dato
    if (!images) { return res.status(404).send({ message: 'No hay datos en la colección' }) }
      // respuesta exitosa
    Album.populate(images, { path: 'album' }, (err, data) => {
      if (err) { return res.status(500).send({ message: 'Error en la peticion ' + err }) }
        // devuelve un objeto ya con los datos anidados
      res.status(200).send({ images: data })
    })
  })
}

function saveImage (req, res) {
  let image = new Image()
  let params = req.body

  image.title = params.title
  image.picture = null
  image.album = params.album

  image.save((err, data) => {
    console.log(data)
    if (err || !data) return res.status(500).send({ message: 'Error al guardar' + err })

    // Guardado exitoso
    res.status(200).send({ image: data })
  })
}

function updateImage (req, res) {
  let imageID = req.params.id
  let update = req.body

  Image.findByIdAndUpdate(imageID, update, (err, data) => {
    if (err) { return res.status(500).send({message: 'Error en la peticion ' + err}) }

    if (!data) { return res.status(404).send({message: 'No hay datos que actualizar'}) }

    res.status(200).send({ imageUpdate: data })
  })
}

function deleteImage (req, res) {
  let imageID = req.params.id

  Image.findByIdAndRemove(imageID, (err, data) => {
    // Manejo del error
    if (err) { res.status(500).send({ message: 'Error al borrar imagen' }) }

    if (!data) { res.status(404).send({ message: 'No existen datos con ese ID' }) }
        // Exitoso la actualizacion
    data.remove(err => {
      if (err) {
        res.status(500).send({ message: 'La imagen no se ha eliminado' })
      } else {
        res.status(200).send({ message: 'La imagen se ha eliminado' })
      }
    })
  })
}

module.exports = {
  getImage,
  getImages,
  saveImage,
  updateImage,
  deleteImage
}
