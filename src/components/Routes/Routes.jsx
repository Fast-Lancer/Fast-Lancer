import { Route, Switch } from 'react-router-dom'
import Auth from '../../views/Auth/Auth.jsx'
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx'
import ClientListView from '../../views/ClientListView/ClientListView.jsx'
import ClientDetailView from '../../views/ClientDetailView/ClientDetailView.jsx'
import About from '../../views/About/About.jsx'
import NewEditClient from '../../views/NewEditClient/NewEditClient.jsx'
import ProjectDetailView from '../../views/Projects/ProjectDetailView.jsx'
import ProjectListView from '../../views/Projects/ProjectListView.jsx'
import NewEditProject from '../../views/Projects/NewEditProject.jsx'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path='/projects/edit/:id'>
        <NewEditProject />
      </PrivateRoute>
      <PrivateRoute exact path='/projects/new'>
        <NewEditProject />
      </PrivateRoute>
      <PrivateRoute exact path='/projects/:id'>
        <ProjectDetailView />
      </PrivateRoute>
      <PrivateRoute exact path='/projects'>
        <ProjectListView />
      </PrivateRoute>
      <PrivateRoute exact path='/clients/edit/:id' >
        <NewEditClient />
      </PrivateRoute>
      <PrivateRoute exact path='/clients/newclient' >
        <NewEditClient isNew />
      </PrivateRoute>
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
        <Auth />
      </Route>
    </Switch>
  )
}
