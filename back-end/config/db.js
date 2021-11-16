require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Connection failed.', err))
}
module.exports = connectDB
