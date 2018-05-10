var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response){
    response.send("<h1>Hello Espresso</h1>")
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})