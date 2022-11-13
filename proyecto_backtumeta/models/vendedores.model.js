const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendedoresSchema= new Schema({
     vendedor_id:{type:String,required:false,max:60},
     nombre: {type:String,required:true,max:60},
     apellido:{type:String, required:true,max:60},
     empresa:{type:String, required:true,false:60},
     mail:{type:String, required:false,max:70},
     clave:{type:String, required:false,max:150}
});

module.exports = mongoose.model("vendedores",VendedoresSchema);