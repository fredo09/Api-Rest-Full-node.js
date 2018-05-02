'use strict'
/**
 * Importando los modelos
 * @type {[type]}
 */

const producto = require('../modelos/productos')

function getProduct(req, res){
  let ProductId = req.params.productId
  producto.findById(ProductId,(err , product) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`}) //Si hubo error
    if(!product) return res.status(404).send({message: 'No existe el Producto'}) //Si no existe el producto
    res.status(200).send({product: product})
  })
}

function getProducts(req, res){
    //Haciendo la busqueda
    producto.find({} ,(err,products) =>{
      if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`}) //Si hubo error
      if(!products) return res.status(404).send({message: 'No existe el Productos'}) //Si no existe el producto
      res.status(200).send({products})
    })
    //res.status(200).send( {products: producto })
}

function updateProduct(req, res){
  let ProductId = req.params.productId
  let bodys = req.body
  //Actualizando registros
  producto.findByIdAndUpdate(ProductId , bodys , (err,productUpdate)=>{
      if(err) res.status(500).send({message: `Error al Acrualizar el Producto: ${err} `})

      res.status(200).send({product: productUpdate})
  })
}

function deleteProduct(req, res){
  //Eliminando Productos
  let productId = req.params.productId

  //Eliminado registros
  producto.findById(productId, (err,product) =>{
    if(err) res.status(500).send({message: `Error al borrar el Producto: ${err} `})

    product.remove(err =>{
        if(err) res.status(500).send({message: `Error al borrar el Producto: ${err} `})
        res.status(200).send({message: 'Producto Eliminado'})
    })
  })
}

function saveProducts(req, res){
  console.log('POST api/product');
  console.log(res.body);

  //Almacenar los datos en la BD
  let product = new producto()
  product.name = req.body.name
  product.photo = req.body.photo
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  //Guardando la informacion en la Base de datos
  product.save((err, ProductStored) => {
    if(err) res.status(500).send({Menssage: 'Error al guardar los datos'})

    res.status(200).send({producto: ProductStored})
  })
}

//Exportando metodos
module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  saveProducts
}
