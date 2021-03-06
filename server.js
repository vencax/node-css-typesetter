require('dotenv').config({path: process.env.DOTENV_CONFIG || '.env'})
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3000
const App = require('./app')

function sendMail (mail) {
  return new Promise((resolve, reject) => {
    console.log(mail)
    resolve(mail)
  })
}

const app = express()

// init CORS?
const opts = {
  maxAge: 86400,
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['DELETE', 'PUT', 'POST', 'OPTIONS', 'GET']
}
app.use(cors(opts))

App(app, sendMail).listen(port, () => {
  console.log('gandalf do magic on ' + port)
})
