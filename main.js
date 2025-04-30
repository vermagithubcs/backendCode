const express =  require('express');
const app = express();
require('dotenv').config();
app.get('/',function(req,res){
    res.send('Home Page');
})
app.get('/about',function(req,res){
    res.send(`<h1>Please Login first then visit about page.</h1>`)
})
app.listen(process.env.PORT,()=>{
    console.log(`Port listening ${process.env.PORT}`);
});