
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

/**
 * Trabajando con mongoose
 */

mongoose.connect(config.db, (err, res) => {
  if(err){
    return console.log(`Se a Producido un error: ${err}`)
  }
  console.log("Se establecido la conexion a la Base de Datos...")

  //escuchando en el puerto 3001 Ejecurando el servidor
  app.listen(config.port , () => {
    //Mensaje a mostrar
    console.log('¡LO HAS LOGREADO!... API REST escuchando en el puerto: '+ config.port +' ;)' );
  })
})
