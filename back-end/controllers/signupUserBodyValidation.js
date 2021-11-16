const joi = require('joi')

exports.signupBodyValidation = async (req, res, next) => {
  const body = req.body

  try {
    // console.log('testing route...', body)
    const bodyValidation = joi.object({
      first_name: joi
        .string()
        .min(2)
        .max(15)
        .error(new Error('First name is required!')),
      last_name: joi
        .string()
        .min(3)
        .max(15)
        .error(new Error('Last name is required!')),
      email: joi
        .string()
        .required()
        .regex(/^[\w!.%+\-]+@[\w\-]+(?:\.[\w\-]+)+$/)
        .error(new Error('Enter valid email!')),
      password: joi
        .string()
        .required()
        .min(6)
        .max(30)
        .error(new Error('Password must be 6 to 30 characters long!')),
      confirm_password: joi
        .string()
        .required()
        .valid(joi.ref('password'))
        .error(new Error('Password do not match!')),
      mobile_number: joi
        .string()
        .regex(/^[0-9]+$/)
        .min(10)
        .max(10)
        // .error(() => 'Enter valid 10 digit mobile number!'),
        .error(new Error('Enter valid 10 digit mobile number!')),
    })
    const { error } = bodyValidation.validate(body, { abortEarly: false })
    if (error) {
      //   console.log(error)
      return res.status(400).json({ status: 'fail', errors: error.message })
    }
    if (!error) {
      //   console.log('exiting the middleware')
      next()
    }

    // console.log('err:' + validationResult.error)
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Internal server error' })
  }
}
