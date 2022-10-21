const express = require('express')
const path = require('path')
const db = require('./services/db')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use(express.json())

;(async () => {
    db.connect()
    const selectBiblio = await db.selectBiblio()

    app.get('/', (req, res) => res.render('index', {biblio: selectBiblio}))
})()

app.get('/acessibilidade', (req, res) => res.render('accessibility'))


app.listen(3000, console.log(`Example app listening on port 3000! - http://localhost:3000/`))