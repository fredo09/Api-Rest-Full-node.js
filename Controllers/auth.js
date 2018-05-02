//Se encargara del registro y autentificacion del usuario
'use strict'

const moongose = require('moongose');
const User = require('../modelos/usuarios');
const service = require('../services');

//registro de nuevo usuario
function singUp(req, res) {
  //Creando usuario
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName
  });

  //En caso de error
  user.save( (err) =>{
    if(err) res.status(500).send({ message: `Error al crear usuario ${ err }` });

    return res.status(200).send({ token: service.createToken(user) });
  });
}

function singIn(req, res) {

}
//exportando modulo
module.exports ={
  singUp,
  singIn
}
