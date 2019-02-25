import React from 'react'
import Table from 'react-bootstrap/Table'
import withAuth from '../containers/withAuth'

const Private = ({ auth: { user } }) => {
  return (
    <div>
      <h1>Your personnal info</h1>
      <Table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>username</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>first_name</td>
            <td>{user.first_name}</td>
          </tr>
          <tr>
            <td>last_name</td>
            <td>{user.last_name}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default withAuth(Private)
