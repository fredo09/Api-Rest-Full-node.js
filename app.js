/**
 * Codigo Javasctipt con EC2015
 */

'use strict'

/**
 * //Requerimos el modulos
 * @type {[type]}
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routers')
/**
 *  comnezando a trabajar middlewares y Peticiones
 */

//middlewares
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) //Permite mensajes con estructura tipo JSON
app.use('/api', api) //usando las rutas del api

//Exportando
module.exports = app
