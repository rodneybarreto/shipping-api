const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

require('./src/routes/index')(app)

app
  .use(cors())
  .listen(PORT, () => {
    console.log(`Shipping Server is running on port: ${PORT}`)
  })

app.get('/health', (req, res) => {
  res.json({health: 'Shipping API is running!'})
})
