const express = require("express");
//forma de indicar ruta absoluta
const path = require("path");
const app = express();
//middleware
// procesos en el medio, body parser , decodifica lo que llega del formulario , lo transforma en un objeto y lo deja disponible en el objeto body
app.use(express.urlencoded({extended:true}));

//endPoint
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.post('/saludar',function(req,res){
    console.log(req.body);
    res.send(`hola ${req.body.name} "${req.body.nickName}" ${req.body.lastName}`);
});

app.listen(3000, function () {
  console.log("server on");
});
