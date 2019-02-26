import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import Menu from './components/menu/Menu';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Private from './pages/Private';
import withAuth from './containers/withAuth';
import { Provider } from 'react-redux'
import { store } from './store';
import FlashMessage from './components/flash/FlashMessage';
import AnimatedSwitch from './components/animatedSwitch/AnimatedSwitch';

class App extends Component {

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('auth-user'))
    const token = localStorage.getItem('auth-token')
    if(user && token) {
      this.props.auth.login(token, user)
    }
  }

  render() {
    return (
      <Router>
        <Route render={({ location, ...rest }) => (
          <React.Fragment>
            <Menu />
            <Container className="mt-2" >
              <FlashMessage />
              <Routing />
            </Container>
          </React.Fragment>
        )} />
      </Router>
    );
  }
}

const Routing = withRouter(withAuth(({ auth: { user } }) => {

  const getRoutes = (style) => {
    const routes = [
      {
        exact: true,
        path: '/',
        component: props => <Home {...props} style={style} />
      }
    ]

    if(user) {
      routes.push({
        path: '/private',
        component: props => <Private {...props} style={style} />
      })
    } else {
      routes.push({
        path: '/login',
        component: props => <Login {...props} style={style} />
      })
    }

    return routes.map((props, i) => <Route {...props} key={i} />)
  }

  return (
    <AnimatedSwitch 
      enter={{ opacity: 1, transform: 'translateY(0)' }}
      leave={{ opacity: 0, transform: 'translateY(50px)' }}>
      {style => {
        return getRoutes(style)
      }}
    </AnimatedSwitch>
  )
}))

const AppWithAuth = withAuth(App)

export default () => (<Provider store={store}><AppWithAuth /></Provider>)
