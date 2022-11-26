const Cliente = require("../models/clientes.model");
let response = {
  msg: "",
  exito: false
}
// Para crear los elementos
exports.create = function (req, res) {
  let cliente = new Cliente({
     nombre: req.body.nombre,
     apellido:req.body.apellido,
     telefono:req.body.telefono,
     mail:req.body.mail,
     clave:req.body.clave

  })
// Para guardar la información
  cliente.save(function (err) {
    if (err) {
      // console.error(err),
      console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el cliente"
      res.json(response)
      return;
    }
    response.exito = true,
      response.msg = "El cliente se guardó correctamente"
    res.json(response)



  })


}
// para realizar una busqueda general
exports.find= function(req,res){
   Cliente.find(function(err,clientes){
    res.json(clientes)
   })
}

// para buscar un elemento con un id
exports.findOne=function(req,res){
  Cliente.findOne({_id:req.params.id},function(err,cliente){
    res.json(cliente)
  })
}
// para actualizar la información
exports.update=function(req,res){
  let cliente = {
    nombre: req.body.nombre,
    apellido:req.body.apellido,
    telefono:req.body.telefono,
    mail:req.body.mail,
    clave:req.body.clave

 }
// ruta de la actualización
Cliente.findByIdAndUpdate(req.params.id,{$set:cliente},function(err){
  if(err){
    console.error(err),
    response.exito=false,
    response.msg="Error al modificar el cliente"
    res.json(response)
    return;
  }
  response.exito=true,
  response.msg="El cliente se modifico correctamente"
  res.json(response)
})
}

// para la eliminación de elementos
exports.remove=function(req,res){
Cliente.findOneAndRemove({_id:req.params.id},function(err){
  if(err){
    console.error(err),
    response.exito=false,
    response.msg="Error al eliminar el cliente"
    res.json(response)
    return;
  }
  response.exito=true,
response.msg="El cliente se eliminación correctamente"
res.json(response)

})


}