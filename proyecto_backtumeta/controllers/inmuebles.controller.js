const Inmueble = require("../models/inmuebles.model");  //recomendable digitarla
let response ={
    msg: "",
    exito: false
}
// funcion para crear un Inmueble

exports.create = function(req,res){
    let inmueble = new Inmueble({
        inmueble_id: req.body.inmueble_id,
        direccion: req.body.direccion,
        tipo_vivienda: req.body.tipo_vivienda,
        habitaciones: req.body.habitaciones,
        banos : req.body.banos,
        area : req.body.area,
        observaciones : req.body.observaciones
    })

    inmueble.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el Inmueble"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El Inmueble se guardó correctamente"
        res.json(response)
    })
}
//metodo para consultar
exports.find = function(req,res){
    Inmueble.find(function(err, inmuebles){
        res.json(inmuebles)
    })
}
//metodo para consultar POR Id(select where)
exports.findOne = function(req,res){
    Inmueble.findOne({_id: req.params.id},function(err, inmueble){
        res.json(inmueble)
    })
}

// funcion para editar
exports.update = function(req,res){
    let inmueble = {
        inmueble_id: req.body.inmueble_id,
        direccion: req.body.direccion,
        tipo_vivienda: req.body.tipo_vivienda,
        habitaciones: req.body.habitaciones,
        banos : req.body.banos,
        area : req.body.area,
        observaciones : req.body.observaciones
    }

    Cliente.findByIdAndUpdate(req.params.id, {$set: inmueble}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el inmueble"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El inmueble se modifico correctamente"
        res.json(response)
    })
}

// funcion para eliminar un inmueble
exports.remove = function(req,res){
    Inmueble.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el inmueble"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Inmueble eliminado correctamente"
        res.json(response)
    })
}