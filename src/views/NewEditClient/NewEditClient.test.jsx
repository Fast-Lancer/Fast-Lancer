import { render, screen, waitFor } from '@testing-library/react'
import { Route, Switch } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import NewEditClient from './NewEditClient.jsx'
import { server } from '../../apiMocks/server.js'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should render the New Client view', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Switch>
        <Route path='/'>
          <NewEditClient isNew/>
        </Route>
      </Switch>
    </MemoryRouter>
  )

  await screen.findByText('Create New Client')
  expect(container).toMatchSnapshot()
})

it('should render the EDIT Client view', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/clients/edit/1']}>
      <Switch>
        <Route path='/clients/edit/1'>
          <NewEditClient />
        </Route>
      </Switch>
    </MemoryRouter>
  )

  await screen.findByText(/Save/i)
  expect(container).toMatchSnapshot()
})
