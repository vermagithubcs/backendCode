const express = require('express');
require('dotenv').config();
const app = express();
app.get("/",function(req,res){
    res.send("Hello guys, Vikash verma");
})
app.listen(process.env.PORT,()=>{
    console.log(`Port ${process.env.PORT} are running...`)
});