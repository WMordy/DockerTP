const express = require('express')
var fs = require("fs");
var mysql = require('mysql');
const app = express()
const port = 2699
app.use(express.json());
app.use('/static',express.static("/app/BackEnd/Webite"))



app.post('/pl',(req1,res1)=>{
  console.log(req1.body)
  let data = {
    name : req1.body.name,
    speed : req1.body.speed,
    drible : req1.body.drible,
    physic : req1.body.physic,
    link : req1.body.link
  }
  var connection = mysql.createConnection({
    host     : '172.17.0.2',
    port : 3306,
    user     : 'root',
    password : 'rootroot',
    database : 'PLAYERS'
  });
  var sql = "INSERT INTO list (name, speed,drible,physic,link) VALUES ?"
  var value = [[data.name,data.speed,data.drible,data.physic,data.link]];
  connection.query(sql,[value], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res1.send("okey")
})

app.get("/data",(req,res)=>{
  var connection = mysql.createConnection({
    host     : '172.17.0.2',
    port : 3306,
    user     : 'root',
    password : 'rootroot',
    database : 'PLAYERS'
  });
  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
    connection.query("SELECT * FROM list", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  })
})
  
app.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
