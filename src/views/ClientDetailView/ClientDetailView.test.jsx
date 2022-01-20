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

  // This bob came from the mocked service
  waitFor(() => screen.findByText(/business1/), {
    timeout: 5000
  })

  expect(container).toMatchSnapshot()
})
