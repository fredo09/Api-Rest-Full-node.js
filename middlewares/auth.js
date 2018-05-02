'use strict'
//requiriendo librerias
const jwt = require( 'jwt' )
const moment = require( 'moment' )
const config = require( '../config' )

//creando funcion para autentificacio middlewars
function isAuth(req, res, next){
  //verificando
  if(!req.headers.authorization){
    res.statu(403).send({ message: 'No tienes authorizacion para acceder' })
  }

  //en caso de existir cabezera
  const token = req.headers.authorization.split(" ")[1]
  const payload = jwt.decode( token, config.SECRET_TOKEN )

  //Verificando de que el token no ha expirado
  if(payload.exp <= moment().unix()){
    res.status(401).send({
      message: 'El token ha expirado'
    })
  }

  req.user = payload.sub
  next()
}

//Exportando Modulo
module.exports = isAuth
