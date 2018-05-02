/**
 * Modelo Producto
 * @type {[type]}
 */

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Definiendo el modelo
const ProductSchema = Schema({
  name: String,
  photo: String,
  price: { type: Number, default: 0},
  category: {type: String , enum :['computadora', 'celular', 'accesorio']},
  description: String
})

//Crear el modelo
module.exports = mongoose.model('Product', ProductSchema)
