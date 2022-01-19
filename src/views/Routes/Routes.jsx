import { Route, Switch } from 'react-router-dom'
import Auth from '../Auth/Auth.jsx'
import Home from '../Home/Home.jsx'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute.jsx'
import Projects from '../Projects/Projects.jsx'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/projects">
        <Projects />
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
