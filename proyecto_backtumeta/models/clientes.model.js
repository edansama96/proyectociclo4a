const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientesSchema= new Schema({
     nombre: {type:String,required:true,max:60},
     apellido:{type:String, required:true,max:60},
     telefono:{type: String, required: false, max:15}, 
     mail:{type:String, required:false,max:70},
     clave:{type:String, required:false,max:150}
});

module.exports = mongoose.model("clientes",ClientesSchema);