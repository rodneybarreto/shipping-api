require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
require('./src/routes/index')(app)

app.use(cors())

app.use('*', (req, res) => {
  res.sendStatus(400)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Shipping-API is running on port: ${PORT}`)
})
