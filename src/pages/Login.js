import React from 'react'
import axios from 'axios'
import LoginForm from '../components/loginForm/LoginForm';
import withAuth from '../containers/withAuth';
import withFlash from '../containers/withFlash';
import { withRouter } from 'react-router-dom'
import { animated } from 'react-spring/renderprops'

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'localhost:8000/api'

function Login({ auth: { login }, flash: { clear, errorMessage, successMessage }, history, style }) {

  const loginUser = async (values) => {
    // this.setState({error: null})
    clear()
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
      setTimeout(clear, 5000)
    } catch(err) {
      console.error(err)
      errorMessage('An error occurred... did you set the right credentials?')
    }
  }

  return (
    <animated.div style={{ ...style, position: 'relative', top: 0 }}>
      <LoginForm onSubmit={loginUser} />
    </animated.div>
  )
}

export default withRouter(withFlash(withAuth(Login)))
