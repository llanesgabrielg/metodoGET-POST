const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send('hi , try send message');
});

app.listen(3000,function(){
    console.log('server on');
});