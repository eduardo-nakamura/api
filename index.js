// init config
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// API Routes
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)


// Route / endpoints
app.get('/', (req,res) => {

  // mostrar req
  res.json({message: 'Oi Express'})

})

// port
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.3861jc0.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
  console.log('Conectamos ao MongoDB')
  app.listen(3100)
})
.catch((err) => {

})

