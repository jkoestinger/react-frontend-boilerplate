import React from 'react'
import { Form, Text } from 'informed'
import FormGroup from 'react-bootstrap/FormGroup'
import Feedback from 'react-bootstrap/Feedback'
import Button from 'react-bootstrap/Button'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const validateUsername = value => {
  return !value ? 'This field is required' : undefined
}

const validatePassword = value => {
  return !value ? 'This field is required' : undefined
}

const classesForField = (formState, fieldName) => {
  return classnames('form-control', {
    'is-invalid': !!formState.errors[fieldName],
    'is-valid': formState.touched[fieldName] && !formState.errors[fieldName]
  })
}

function LoginForm({ onSubmit }) {
  return (
    <React.Fragment>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        {({ formState }) => (
          <React.Fragment>
            <FormGroup>
              <label>Username</label>
              <Text 
                className={classesForField(formState, 'username')}
                field="username" 
                validateOnBlur
                validateOnChange
                validate={validateUsername} />
              <Feedback type="invalid">
                {formState.errors['username']}
              </Feedback>
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <Text 
                className={classesForField(formState, 'password')}
                field="password" 
                type="password" 
                validateOnBlur
                validateOnChange
                validate={validatePassword} />
              <Feedback type="invalid">
                {formState.errors['password']}
              </Feedback>
            </FormGroup>
            <Button type="submit" variant="success">Login</Button>
          </React.Fragment>
        )}
      </Form>
    </React.Fragment>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

LoginForm.defaultProps = {
  onSubmit: (values) => {
    console.log(values)
  }
}

export default LoginForm
