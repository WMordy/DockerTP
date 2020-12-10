const express = require('express')
const app = express()
const port = 2699



app.use('/static',express.static("/app/BackEnd/Webite"))

app.get('/test',(req,res) =>{
  res.send('its working here inside ');
  
})


  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
