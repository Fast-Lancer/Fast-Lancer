import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import { server } from '../../../apiMocks/server.js'
import { UserProvider, useUser } from '../../../context/UserContext.jsx'
import ClientDetailView from '../ClientDetailView/ClientDetailView.jsx'
import NewEditClient from './NewEditClient.jsx'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

const UserAdder = () => {
  const { setUser } = useUser()
  useEffect(() => {
    setUser({ id: 1 })
  }, [])

  return null
}

let location

const LocationGrabber = () => {
  location = useLocation()
  return null
}

it.skip('should render the fetched data', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <UserProvider>
        <UserAdder />
        <Switch>
          <Route path='/clients/:id'>
            <LocationGrabber />
            <ClientDetailView />
          </Route>
          <Route path='/'>
            <LocationGrabber />
            <NewEditClient isNew />
          </Route>
        </Switch>
      </UserProvider>
    </MemoryRouter>
  )

  const nameInput = await screen.findByLabelText('Client Name')
  const emailInput = await screen.findByLabelText('E-Mail')
  const phoneInput = await screen.findByLabelText('Phone Number')
  const businessInput = await screen.findByLabelText('Business Name')
  const notesInput = await screen.findByLabelText('Notes')
  const submitButton = await screen.findByText('Save')

  fireEvent.change(nameInput, { target: { value: 'bobs name' } })
  fireEvent.change(emailInput, { target: { value: 'bob@bob.com' } })
  fireEvent.change(phoneInput, { target: { value: '123' } })
  fireEvent.change(businessInput, { target: { value: 'bobs business' } })
  fireEvent.change(notesInput, { target: { value: 'note' } })

  fireEvent.click(submitButton)

  await waitFor(() => location.pathName === '/clients/42', { timeout: 1000 })

  await screen.findByText('bobs business')

  expect(container).toMatchSnapshot()
})
