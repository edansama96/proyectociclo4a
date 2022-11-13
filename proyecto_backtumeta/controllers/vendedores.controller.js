const Vendedor = require("../models/vendedores.model");
let response = {
  msg: "",
  exito: false
}

exports.create = function (req, res) {
  let vendedor = new  Vendedor({
    vendedor_id: req.body.vendedor,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    empresa: req.body.empresa,
    mail: req.body.mail,
    clave: req.body.clave
  })

  vendedor.save(function (err) {
    if (err) {
      // console.error(err),
      console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el empleado"
      res.json(response)
      return;
    }
    response.exito = true,
      response.msg = "El empleado se guardó correctamente"
    res.json(response)



  })


}