import { clear, errorMessage, successMessage } from '../store/flash/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return {
    ...ownProps,
    flash: {
      ...ownProps.flash,
      ...state.flash
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps)
  return {
    ...ownProps,
    errorMessage: (message) => {
      dispatch(errorMessage(message))
    },
    successMessage: (message) => {
      dispatch(successMessage(message))
    },
    clearFlash: () => {
      dispatch(clear())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)