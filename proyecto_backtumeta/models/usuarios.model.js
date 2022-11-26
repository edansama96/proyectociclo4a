const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
   usuario:{type:String,requiered:true,max:100},
   pass:{type:String,requiered:true,max:128}, 
})

module.exports=mongoose.model("usuarios",UsuarioSchema);