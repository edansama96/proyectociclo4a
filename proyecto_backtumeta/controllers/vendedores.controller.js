const Vendedor = require("../models/vendedores.model");
let response = {
  msg: "",
  exito: false
}
// Para crear los elmentos
exports.create = function (req, res) {
  let vendedor = new Vendedor({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    empresa: req.body.empresa,
    telefono: req.body.telefono,
    mail: req.body.mail,
    clave: req.body.clave
  })
  // Para guardar la informaicíon
  vendedor.save(function (err) {
    if (err) {
      // console.error(err),
      console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el vendedor"
      res.json(response)
      return;
    }
    response.exito = true,
      response.msg = "El vendedor se guardó correctamente"
    res.json(response)



  })


}

// Para realizar una busqueda
exports.find = function (req, res) {
  Vendedor.find(function (err, vendedores) {
    res.json(vendedores)
  })
}

// Para buscar la información con id

exports.findOne = function (req, res) {
  Vendedor.findOne({ _id: req.params.id }, function (err, vendedor) {
    res.json(vendedor)
  })
}

// Para actualizar la información:
exports.update = function (req, res) {
  let vendedor = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    empresa: req.body.empresa,
    telefono: req.body.telefono,
    mail: req.body.mail,
    clave: req.body.clave
  }
  // Ruta de la actualización
  Vendedor.findByIdAndUpdate(req.params.id, { $set: vendedor }, function (err) {
    if(err){
      console.error(err),
      response.exito=false,
      response.msg="Error al modificar el vendedor"
      res.json(response)
      return;
    }
    response.exito=true,
    response.msg="El vendedor se modifico correctamente"
    res.json(response)
  })

}

// Para la eliminación de elementos
exports.remove=function(req,res){
  Vendedor.findByIdAndRemove({_id:req.params.id},function(err){
    if(err){
      console.error(err),
      response.exito=false,
      response.msg="Error al eliminar el vendedor"
      res.json(response)
      return;
    }
    response.exito=true,
    response.msg="El vendedor se eliminación correctamente"
    res.json(response)
  })
}