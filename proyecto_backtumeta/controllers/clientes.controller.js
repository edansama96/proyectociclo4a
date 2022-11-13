const Cliente = require("../models/clientes.model");
let response = {
  msg: "",
  exito: false
}

exports.create = function (req, res) {
  let cliente = new Cliente({
  
    cliente_id:req.body.cliente_id,
     nombre: req.body.nombre,
     apellido:req.body.apellido,
     mail:req.body.mail,
     clave:req.body.clave

  })

  cliente.save(function (err) {
    if (err) {
      // console.error(err),
      console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el inmueble"
      res.json(response)
      return;
    }
    response.exito = true,
      response.msg = "El inmueble se guardó correctamente"
    res.json(response)



  })


}