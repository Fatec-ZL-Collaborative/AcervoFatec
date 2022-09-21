import express, {Request, Response} from 'express'
import path from 'path'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use(express.json())

app.get('/', (req:Request, res:Response) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))