const express = require('express')
// require('dotenv').config() 
const app = express()
const api = require('./routes/api')

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api',api)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})