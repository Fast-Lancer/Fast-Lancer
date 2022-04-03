import { render, screen, waitFor } from '@testing-library/react'
import { Route, Switch } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import { server } from '../../apiMocks/server.js'
import ClientDetailView from './ClientDetailView.jsx'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should render the fetched data', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/1']}>
      <Switch>
        <Route path='/:id'>
          <ClientDetailView />
        </Route>
      </Switch>
    </MemoryRouter>
  )

  await screen.findByText('Loading...')

  await screen.findByText('Notes')

  // This text comes from the mocked service
  await screen.findByText('bob1')
  await screen.findByText('business1')

  expect(container).toMatchSnapshot()
})
