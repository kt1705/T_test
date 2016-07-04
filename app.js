var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', funcion(req,res) {
  res.render('first_ejs');
});

app.listen(3000, function(){
  console.log('server on!');
});
