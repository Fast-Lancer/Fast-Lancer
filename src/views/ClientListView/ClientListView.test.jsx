import { render, screen } from '@testing-library/react'
import { Route, Switch } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import ClientListView from './ClientListView.jsx'
import { server } from '../../apiMocks/server.js'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should render the fetched data', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Switch>
        <Route path='/'>
          <ClientListView />
        </Route>
      </Switch>
    </MemoryRouter>
  )

  await screen.findByText('Loading...')

  // These bobs come from the mocked service
  await screen.findByText(/bob1/)
  await screen.findByText(/bob2/)
  await screen.findByText(/bob3/)

  expect(container).toMatchSnapshot()
})
