import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import Menu from './components/menu/Menu';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
// import history from './history'
import Home from './pages/Home';
import Login from './pages/Login';
import Private from './pages/Private';
import withAuth from './containers/withAuth';
import { Provider } from 'react-redux'
import { store } from './store';
import FlashMessage from './components/flash/FlashMessage';

class App extends Component {

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('auth-user'))
    const token = localStorage.getItem('auth-token')
    if(user && token) {
      this.props.login(token, user)
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Menu />
          <Container className="mt-2">
            <FlashMessage />
            <Routing />
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

const Routing = withRouter(withAuth(({ location, auth: { user } }) => (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      {!user && <Route path="/login" component={Login} />}
      {user && <Route path="/private" component={Private} />}
    </Switch>
)))


const AppWithAuth = withAuth(App)

export default () => (<Provider store={store}><AppWithAuth /></Provider>)
