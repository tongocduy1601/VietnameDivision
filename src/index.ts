import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './router/router'

import morganMiddleware from './logger/winston.logger'
dotenv.config()
const app: Express = express()
const port = process.env.PORT || 3000
app.use(morganMiddleware)
app.use('/api/v1', router)
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
