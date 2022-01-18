import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { UserProvider } from '../context/UserContext'
import PrivateRoute from './PrivateRoute.jsx'


it('should render the children or redirect', async () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter initialEntries={['/profile']}>
        <Switch>
          <PrivateRoute path='/profile'>
            <h2>profile</h2>
          </PrivateRoute>
          <Route path='/login'>
            <h2>login</h2>
          </Route>
        </Switch>
      </MemoryRouter>
    </UserProvider>
  )

  const loginText = await screen.findByText('login')
  expect(loginText).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})