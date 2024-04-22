import 'dotenv/config'

import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { routes } from './routes'
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())

routes(app)

app.listen(PORT, () => {
  console.log(' Appplication listening at  http://localhost:' + PORT)
})
