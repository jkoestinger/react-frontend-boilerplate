import React from 'react'
import Alert from 'react-bootstrap/Alert'
import withAuth from '../containers/withAuth';

function Home({ auth: { user } }) {
  return (
    <div>
      <h1>This is a public page</h1>
      <p>Try to login in order to access top secret data</p>
      {user && <Alert variant="info">
        You can now access the private data page with the new menu item
      </Alert>}
    </div>
  )
}

export default withAuth(Home)
