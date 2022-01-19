import { Route, Switch } from 'react-router-dom'
import Auth from '../Auth/Auth.jsx'
import Home from '../Home/Home.jsx'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute.jsx'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/projects">
        <Auth />
      </PrivateRoute>
      <Route path="/login">
        <Auth />
      </Route>
      <Route path="/signup">
        <Auth />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
