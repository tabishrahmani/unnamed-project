const router = require('express').Router()
const {
  signupBodyValidation,
} = require('../controllers/signupUserBodyValidation')
const { signupUserController } = require('../controllers/signupUserController')

router.post('/create', signupBodyValidation, (req, res) => {
  signupUserController(req, res)
})

module.exports = router
