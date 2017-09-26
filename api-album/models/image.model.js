'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ImageSchema = Schema({
  title: String,
  picture: String,
  album: { type: Schema.ObjectId, ref: 'Album' } // haciendo referencia a otra coleccion
})

module.exports = mongoose.model('Image', ImageSchema)
