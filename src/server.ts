import * as dotenv from 'dotenv'
import * as express from 'express'

dotenv.config();
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Does the world need ANOTHER blogging platform?')
})

app.listen(port, () => {
  console.log(`Listening to: http://localhost:${port}`)
})