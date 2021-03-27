require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
require('./src/routes/index')(app)

app.use(cors())

app.use('*', (req, res) => {
  res.sendStatus(400)
})

const HOST = process.env.SHIPPING_HOST || '0.0.0.0'
const PORT = process.env.SHIPPING_PORT || 8082
app.listen(PORT, HOST, () => {
  console.log(`Shipping-API running on HOST: ${HOST} PORT: ${PORT}`)
})
