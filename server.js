require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'HEAD,GET,PUT,POST,PATCH,DELETE,OPTIONS')
  app.use(cors())
  next()
})

require('./src/routes/index')(app)

app.use('*', (req, res) => {
  res.sendStatus(400)
})

const HOST = process.env.SHIPPING_HOST || '0.0.0.0'
const PORT = process.env.SHIPPING_PORT || 8082
app.listen(PORT, HOST, () => {
  console.log(`Shipping-API running on HOST: ${HOST} PORT: ${PORT}`)
})
