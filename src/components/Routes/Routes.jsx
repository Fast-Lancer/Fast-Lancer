import { Route, Switch } from 'react-router-dom'
import Auth from '../../views/Auth/Auth.jsx'
import Home from '../../views/Home/Home.jsx'
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx'
import Projects from '../../views/Projects/Projects.jsx'
import ClientListView from '../../views/ClientListView/ClientListView.jsx'
import ClientDetailView from '../../views/ClientDetailView/ClientDetailView.jsx'
import About from '../../views/About/About.jsx'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path='/projects'>
        <Projects />
      </PrivateRoute>
      <PrivateRoute path='/clients/:id'>
        <ClientDetailView />
      </PrivateRoute>
      <PrivateRoute path='/clients'>
        <ClientListView />
      </PrivateRoute>
      <Route path='/login'>
        <Auth />
      </Route>
      <Route path='/signup'>
        <Auth />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}
