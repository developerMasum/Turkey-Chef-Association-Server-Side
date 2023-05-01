const express = require('express')
const app = express()
const port = 5000
const chefData = require('./Datas/chefDAta.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefData', (req, res) => {
  res.send(chefData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})