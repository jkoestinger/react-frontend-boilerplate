import React from 'react'
import Alert from 'react-bootstrap/Alert'
import withAuth from '../containers/withAuth';
import { animated } from 'react-spring/renderprops'

function Home({style, auth: { user } }) {
  return (
    <animated.div style={{ ...style, position: 'absolute', top: 0 }}>
      <h1>This is a public page</h1>
      <p>Try to login in order to access top secret data</p>
      {user && <Alert variant="info">
        You can now access the private data page with the new menu item
      </Alert>}
    </animated.div>
  )
}

export default withAuth(Home)
