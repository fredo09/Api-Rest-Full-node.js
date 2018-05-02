'use strict'

const express = require('express')
const api = express.Router()

/**
 * Importando los modelos
 * @type {[type]}
 */

const ProductCtrl = require('../Controllers/Products')

//Trabajando con la URL Peticiones
/**
 * app.get('/hola/:name', (req, res) =>{
   res.send({message: `Hola ${req.params.name}!`}) //Lo que se va a enviar
 })
 */
api.get('/product',ProductCtrl.getProducts)
api.get('/product/:productId',ProductCtrl.getProduct)
api.post('/product',ProductCtrl.saveProducts)
api.put('/product/:productId',ProductCtrl.updateProduct)
api.delete('/product/:productId',ProductCtrl.deleteProduct)

module.exports = api
