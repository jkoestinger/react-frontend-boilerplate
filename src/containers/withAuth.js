import { login, logout } from '../store/auth/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (token, user) => {
      dispatch(login(token, user))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)