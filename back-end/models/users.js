const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, trim: true, required: true },
    email_hash: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    mobile_number: { type: String, trim: true },
    mobile_number_hash: { type: String, trim: true },
  },
  { timestamps: true }
)

const user = mongoose.model('User', userSchema)
module.exports = user
