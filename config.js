/*
Modulo de configuracion 
 */

// Exportado
module.exports = {
    port: process.env.PORT || 3000,
    db:process.env.MONGODB || 'mongodb://localhost:27017/Tienda',
    SECRET_TOKEN: 'MICLAVEDETOKENS'
}
