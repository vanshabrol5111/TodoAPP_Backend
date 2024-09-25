const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const  mongoose  = require("mongoose");
const cors = require("cors")
app.use(bodyparser.json());
app.use(cors());
require("dotenv").config();
const mongoUrl=process.env.MONGODB;
const router =require("./routes")

app.get('/home',(req,res)=> {
     return res.json({
        msg: 'home route'
     })
    
})
app.use('/api',router)
mongoose.connect(mongoUrl).then(()=>{
    console.log("database connected");
    
}).catch((error)=>{
    console.log("something went wrong in  connecting database");
    
})

const PORT=process.env.PORT || 4000;
app.listen(process.env.PORT,()=>
{
    console.log(`Server started at Port:${PORT}`)
})