import React from 'react'
import withFlash from '../../containers/withFlash'
import Alert from 'react-bootstrap/Alert';

const FlashMessage = ({ flash: { message, clear } }) => {
  // if(!message) {
  //   return null
  // }

  return (
    <Alert show={!!message} variant={message ? message.type : ''} dismissible onClose={clear}>
      {message && message.text}
    </Alert>
  )
}

export default withFlash(FlashMessage)
