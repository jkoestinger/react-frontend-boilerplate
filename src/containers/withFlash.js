import { clear, errorMessage, successMessage } from '../store/flash/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return state.flash
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps)
  return {
    errorMessage: (message) => {
      dispatch(errorMessage(message))
    },
    successMessage: (message) => {
      dispatch(successMessage(message))
    },
    clear: () => {
      dispatch(clear())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (state, dispatch, ownProps) => {
    return {
      ...ownProps,
      flash: {
        ...state,
        ...dispatch,
      }
    }
  }
)