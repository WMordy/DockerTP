const express = require('express')
var fs = require("fs");
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
  let info = fs.readFileSync("/app/BackEnd/data.json")
  let file = JSON.parse(info)
  file.push(data)
  fs.writeFile("/app/BackEnd/data.json",JSON.stringify(file),(err,f)=>{
    console.log(err)
  })
  res1.send("okey")
})



app.get("/data",(req,res)=>{
  res.sendFile("/app/BackEnd/data.json");
})
  
app.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
