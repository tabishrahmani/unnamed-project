import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Card,
  Col,
  Row,
} from 'reactstrap'

const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirm_password: '',
  })

  const { email, password, confirm_password } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/v1/user/create', values).then((data) => {
      alert(data.data)
    })
  }

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value })
  }

  const signupForm = () => {
    return (
      <Card body className="mt-4">
        <Form onSubmit={handleSubmit} className="">
          <FormGroup>
            <Input
              name="email"
              value={email}
              onChange={handleChange('email')}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </FormGroup>

          <FormGroup>
            <Input
              name="password"
              value={password}
              onChange={handleChange('password')}
              type="password"
              className="form-control"
              placeholder="Create password"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="confirm_password" // TODO: check
              value={confirm_password}
              onChange={handleChange('confirm_password')}
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </FormGroup>

          <Button color="primary" className=" px-4 py-2" block>
            Sign up
          </Button>
        </Form>
      </Card>
    )
  }
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col xs="12" md="6" className="mx-auto">
            <div
              className="my-5 m-auto text-center mb-4"
              style={{ minHeight: '37px' }}
            >
              <h1 className="text-bold">Sign up</h1>
            </div>

            {signupForm()}
            <p color="muted" className="mt-4 mb-0">
              Have an account? <a href="/signin">Sign in</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Signup
