const userModel = require('../models/users')
const encryptionData = require('../../utils/encryption')

exports.signupUserController = async (req, res) => {
  try {
    const data = req.body
    // console.log(data)
    let body = {}

    body.first_name =
      typeof data.first_name !== 'undefined'
        ? encryptionData.encryptData(data.first_name)
        : ''
    body.last_name =
      typeof data.last_name !== 'undefined'
        ? encryptionData.encryptData(data.last_name)
        : ''
    body.email =
      typeof data.email !== 'undefined'
        ? encryptionData.encryptData(data.email)
        : ''
    body.email_hash =
      typeof data.email !== 'undefined'
        ? encryptionData.hashData(data.email)
        : ''
    body.password =
      typeof data.password !== 'undefined'
        ? encryptionData.hashData(data.password)
        : ''
    body.mobile_number =
      typeof data.mobile_number !== 'undefined'
        ? encryptionData.encryptData(data.mobile_number)
        : ''
    body.mobile_number_hash =
      typeof data.mobile_number !== 'undefined'
        ? encryptionData.hashData(data.mobile_number)
        : ''

    let user = await userModel.create(body)
    if (user) {
      res.status(200).json({ status: 'success', message: 'User created.' })
    }
  } catch (error) {
    console.log(error)

    if (error.code == 11000) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'User already exists.' })
    }
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong!' })
  }
}
