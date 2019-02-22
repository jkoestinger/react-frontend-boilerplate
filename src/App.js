import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import './App.css';
import Menu from './components/menu/Menu';
import { Router, Route } from 'react-router-dom'
import history from './history'
import Home from './pages/Home';
import Login from './pages/Login';
import Private from './pages/Private';
import axios from 'axios'
import withAuth from './containers/withAuth';
import { Provider } from 'react-redux'
import { store } from './store';

const ENDPOINT = 'localhost:8000/api'

class App extends Component {

  state = {
    error: null,
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('auth-user'))
    const token = localStorage.getItem('auth-token')
    if(user && token) {
      this.props.login(token, user)
    }
  }

  loginUser = async (values) => {
    this.setState({error: null})
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
      this.props.login(access, userRes.data)
      history.push('/')
    } catch(err) {
      console.error(err)
      this.setState({
        error: 'An error occurred... did you set the right credentials?'
      })
    }
  }

  logoutUser = () => {
    this.props.logout()
    localStorage.removeItem('auth-user')
    localStorage.removeItem('auth-token')
    history.push('/')
  }

  render() {
    const user = this.props.auth.user
    return (
      <Router history={history}>
        <React.Fragment>
          <Menu user={user} onLogout={this.logoutUser} />
          <Container>
            <Alert show={!!this.state.error} variant="danger" dismissible onClose={() => {this.setState({error: null})}}>
              {this.state.error}
            </Alert>
            <Route exact path="/" component={() => <Home user={user} />} />
            {!user && <Route path="/login" component={() => <Login onSubmit={this.loginUser} />} />}
            {user && <Route path="/private" component={() => <Private user={user} />} />}
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

const AppWithAuth = withAuth(App)
// console.log(AppWithAuth)

export default () => (<Provider store={store}><AppWithAuth /></Provider>)
