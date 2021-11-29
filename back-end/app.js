require('dotenv').config({ path: '../.env' })
const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())

connectDB()

app.get('/', (req, res) => res.send('Welcome...'))
app.use('/api/v1/user', userRoutes)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`App is ready on port ${port}`)
})
