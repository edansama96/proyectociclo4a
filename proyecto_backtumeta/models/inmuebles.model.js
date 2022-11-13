const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InmueblesSchema= new Schema({
    inmueble_id:{type: String, required: true, max:60},
    direccion:{type: String, required: true, max:250},
    tipo_vivienda:{type: String, required: true, max:60},
    habitaciones:{type: Number, required: false, max:45},
    baños:{type: Number, required: false, max:45},
    area:{type: Number, required: false, max:250},
    descripcion:{type: String, required: true, max:250},
    comentarios:{type: String, required: true, max:250},
    fotos:{type: String, required: true, max:250},
    valor:{type: String, required: true, max:250}
});

module.exports = mongoose.model("inmuebles",InmueblesSchema);