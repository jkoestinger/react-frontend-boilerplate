import React from 'react'
import LoginForm from '../components/loginForm/LoginForm';

function Login({ onSubmit }) {

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
