import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import { server } from '../../apiMocks/server.js'
import { UserProvider, useUser } from '../../context/UserContext.jsx'
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

it('should render the fetched data', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <UserProvider>
        <UserAdder />
        <Switch>
          <Route path='/'>
            <NewEditClient isNew />
            <LocationGrabber />
          </Route>
          <Route path='/clients/:id'>
            <ClientDetailView />
            <LocationGrabber />
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
  const submitButton = await screen.findByText((content, element) => (
    content === 'Add New Client' && element.tagName.toLowerCase() === 'button'
  ))

  fireEvent.change(nameInput, { target: { value: 'bobs name' } })
  fireEvent.change(emailInput, { target: { value: 'bob@bob.com' } })
  fireEvent.change(phoneInput, { target: { value: '123' } })
  fireEvent.change(businessInput, { target: { value: 'bobs business' } })
  fireEvent.change(notesInput, { target: { value: 'note' } })

  console.log(location)
  screen.debug(submitButton)

  fireEvent.click(submitButton)

  //await waitFor(() => screen.getByText('Loading...'), 5000)

  // TODO fix this once NewEditClient works
  await waitFor(() => location.pathName === '/clients/1', { timeout: 1000 })
  await waitFor(() => screen.getByText('bobs name'), { timeout: 1000 })
  console.log(location)

  await screen.findByText('bobs name')
  await screen.findByText('bob@bob.com')
  await screen.findByText('123')
  await screen.findByText('bobs business')
  await screen.findByText('note')

  expect(container).toMatchSnapshot()
})
