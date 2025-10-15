const express = require('express')
const app = express()
require(`dotenv`).config()

const port = process.env.PORT
const connectDB = require (`./config/db.js`)
const router = require(`./routes/index.js`)
const cookieParser = require('cookie-parser')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//http://localhost:3001/api

app.use(express.json())
app.use(cookieParser())
app.use('/api',router)

//connect DB
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
