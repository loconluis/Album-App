'use strict'
const Image = require('../models/image.model')
const Album = require('../models/album.model')

function sup (req, res) {
  return res.status(200).send({message: 'WAZAAAP'})
}

module.exports = {
  sup
}
