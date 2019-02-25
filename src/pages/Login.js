import React from 'react'
import axios from 'axios'
import LoginForm from '../components/loginForm/LoginForm';
import withAuth from '../containers/withAuth';
import withFlash from '../containers/withFlash';
import { withRouter } from 'react-router-dom'

const ENDPOINT = 'localhost:8000/api'

function Login({ login, clearFlash, errorMessage, successMessage, history }) {

  const loginUser = async (values) => {
    // this.setState({error: null})
    clearFlash()
    try {
      const res = await axios.post(`http://${ENDPOINT}/login/`, {
        username: values.username,
        password: values.password
      })
      const { access } = res.data
      const userRes = await axios.get(`http://${ENDPOINT}/user/`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      })
      // this.setState({user: userRes.data, token: access})
      localStorage.setItem('auth-user', JSON.stringify(userRes.data))
      localStorage.setItem('auth-token', access)
      login(access, userRes.data)
      history.push('/')
      successMessage('You are successfully logged in :)')
      setTimeout(clearFlash, 5000)
    } catch(err) {
      console.error(err)
      errorMessage('An error occurred... did you set the right credentials?')
    }
  }

  return (
    <div>
      <LoginForm onSubmit={loginUser} />
    </div>
  )
}

export default withRouter(withFlash(withAuth(Login)))
