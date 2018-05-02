'use strict'

const express = require('express')
const api = express.Router()
const auth = require('../middlewars/auth')

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
api.get('/private', auth.isAuth, function(req, res){
  res,status(200).send({message: 'tienes acceso'})
})
module.exports = api
