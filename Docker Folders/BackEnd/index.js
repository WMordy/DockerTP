const express = require('express')
const app = express()
const port = 2699



app.use('/players-card', express.static("../Webite"))

  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
