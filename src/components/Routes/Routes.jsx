import { Route, Switch } from 'react-router-dom'
import Auth from '../../views/Auth/Auth.jsx'
import Home from '../../views/Home/Home.jsx'
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx'
import Projects from '../../views/Projects/Projects.jsx'
import ClientListView from '../../views/ClientListView/ClientListView.jsx'
import ClientDetailView from '../../views/ClientDetailView/ClientDetailView.jsx'
import About from '../../views/About/About.jsx'
import NewEditClient from '../../views/NewEditClient/NewEditClient.jsx'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path='/projects'>
        <Projects />
      </PrivateRoute>

      {/* MAKE PRIVATE: */}
      <Route exact path='/clients/edit/:id' >
        <NewEditClient />
      </Route>
      {/* MAKE PRIVATE: */}
      <Route exact path='/clients/new' >
        <NewEditClient isNew/>
      </Route>
      <PrivateRoute exact path='/clients/:id'>
        <ClientDetailView />
      </PrivateRoute>
      <PrivateRoute exact path='/clients'>
        <ClientListView />
      </PrivateRoute>
      <Route exact path='/login'>
        <Auth />
      </Route>
      <Route exact path='/signup'>
        <Auth />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  )
}
