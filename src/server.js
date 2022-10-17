const express = require('express')
const app = express()
const path = require('path')

const connection = require('./model/services/db')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use(express.json())

app.get('/', connection)

app.listen(3000, console.log(`Example app listening on port 3000! - http://localhost:3000/`))