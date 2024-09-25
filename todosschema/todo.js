const mongoose=require("mongoose");
const todoschema=new mongoose.Schema({



title:{
    type:String,
},

description:{
    type:String,
},
iscompleted :{
    type : Boolean, 
    default:false
    
},
},{timestamps:true

})
module.exports=mongoose.model("tododata",todoschema);
