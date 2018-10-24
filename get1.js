var express = require('express');
var app = express();
var fs = require("fs");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host   : 'localhost',
  user   : 'servicio2',
  password : 'servicio2.123',
  database : 'empleado'
});

 connection.connect();


app.get('/empleados', function (req, res) {
    connection.query('select * from empleados', function (error, results, fields) {
  if (error) throw error;
  return res.send({error: false, date: results[0], message: 'Todos list'})
 });
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("si salio", host, port)

})


