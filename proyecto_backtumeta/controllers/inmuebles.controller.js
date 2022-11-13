const Inmueble = require("../models/inmuebles.model");
let response = {
  msg: "",
  exito: false
}

exports.create = function (req, res) {
  let inmueble = new Inmueble({
  
    inmueble_id:req.body.inmueble_id,
    direccion: req.body.direccion,
    tipo_vivienda:req.body.tipo_vivienda,
    habitaciones:req.body.habitaciones,
    baños:req.body.baños,
    area:req.body.area,
    descripcion:req.body.descripcion,
    comentarios:req.body.comentarios,
    fotos:req.body.fotos,
    valor:req.body.valor

  })

  inmueble.save(function (err) {
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