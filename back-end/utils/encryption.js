const crypto = require('crypto')

const algorithm = 'aes-256-cbc'
const iv = crypto.randomBytes(16)
const key = process.env.ENCRYPTION_KEY

const encryptionData = {}

encryptionData.hashData = (data) => {
  const hashedData = crypto.createHash('sha256').update(data).digest('hex')
  return hashedData
}

encryptionData.encryptData = (data) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encryptedData = cipher.update(data, 'utf-8', 'hex')
  encryptedData += cipher.final('hex')
  return encryptedData
}

encryptionData.decryptData = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8')
  decryptedData += decipher.final('utf8')
  return decryptedData
}

module.exports = encryptionData
