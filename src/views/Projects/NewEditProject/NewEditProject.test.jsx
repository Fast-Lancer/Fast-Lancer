import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import { server } from '../../../apiMocks/server.js'
import { UserProvider, useUser } from '../../../context/UserContext.jsx'
import ProjectDetailView from '../ProjectDetailView/ProjectDetailView.jsx'
import NewEditProject from './NewEditProject.jsx'

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
    <MemoryRouter initialEntries={['/projects/new']}>
      <UserProvider>
        <UserAdder />
        <Switch>
          <Route path='/projects/new'>
            <LocationGrabber />
            <NewEditProject />
          </Route>
          <Route path='/projects/:id'>
            <LocationGrabber />
            <ProjectDetailView />
          </Route>
        </Switch>
      </UserProvider>
    </MemoryRouter>
  )

  const sDateInput = await screen.findByLabelText(/Start Date:/)
  const eDateInput = await screen.findByLabelText(/End Date:/)
  const rateInput = await screen.findByLabelText(/Hourly Rate:/)
  const workedInput = await screen.findByLabelText(/Hours Worked:/)
  const urlInput = await screen.findByLabelText(/URL:/)
  const descInput = await screen.findByLabelText(/Description:/)
  const completedInput = await screen.findByLabelText(/Completed At:/)
  const pQuoteInput = await screen.findByLabelText(/Price Quoted:/)
  const hQuoteInput = await screen.findByLabelText(/Hours Quoted:/)
  const titleInput = await screen.findByLabelText(/Title:/)
  const notesInput = await screen.findByLabelText(/Notes:/)
  const clientInput = await screen.findByLabelText(/Client:/)
  const submitButton = await screen.findByText('Save')

  fireEvent.change(sDateInput, { target: { value: '1-1-2000' } })
  fireEvent.change(eDateInput, { target: { value: '1-1-2000' } })
  fireEvent.change(rateInput, { target: { value: '2' } })
  fireEvent.change(workedInput, { target: { value: '3' } })
  fireEvent.change(urlInput, { target: { value: 'abc.com' } })
  fireEvent.change(descInput, { target: { value: 'desc' } })
  fireEvent.change(completedInput, { target: { value: '1-1-2000' } })
  fireEvent.change(pQuoteInput, { target: { value: '4' } })
  fireEvent.change(hQuoteInput, { target: { value: '5' } })
  fireEvent.change(titleInput, { target: { value: 'test title' } })
  fireEvent.change(notesInput, { target: { value: 'test notes' } })
  fireEvent.change(clientInput, { target: { value: 1 } })

  fireEvent.click(submitButton)

  await waitFor(() => location.pathName === '/projects/42', { timeout: 1000 })

  await screen.findByText('test title')
  await screen.findByText('test notes')

  expect(container).toMatchSnapshot()
})
