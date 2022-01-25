import React from 'react'
import { useHistory } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'

export default function PrivateRoute({ children, ...rest }) {
  const history = useHistory()
  const { user } = useUser()

  if (user.id) {
    return <Route {...rest}>{children}</Route>
  } else {
    history.push('/login?redirect=true') // You could also use <Redirect> to pass location state
    return null
  }
}
