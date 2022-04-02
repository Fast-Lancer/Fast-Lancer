import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import Routes from '../../components/Routes/Routes.jsx'

jest.mock('../../services/users.js')

let location = null
let history = null

function LocationGrabber() {
  location = useLocation()
  return null
}

function HistoryGrabber() {
  history = useHistory()
  return null
}

it('should render the sign up page and sign up a user', async () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <Routes/>
      <LocationGrabber/>
    </MemoryRouter>
  )
  const signUpText = await screen.findByText((content, element) => {
    return content === 'Sign Up' && element.tagName.toLowerCase() === 'section'
  })

  expect(signUpText).toBeInTheDocument()

  const emailInput = await screen.findByLabelText('Email:')
  const passwordInput = await screen.findByLabelText('Password:')
  const signupButton = await screen.findByText((content, element) => element.tagName.toLowerCase() === 'button' && content === 'Sign Up')
  
  fireEvent.change(emailInput, { target: { value: 'asdf' } })
  fireEvent.change(emailInput, { target: { value: '1234' } })
  fireEvent.click(signupButton)

  await waitFor(() => location.pathname === '/projects')
})

it('should render the log in page and log in a user', async () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes/>
      <LocationGrabber/>
    </MemoryRouter>
  )
  const signUpText = await screen.findByText((content, element) => {
    return content === 'Log In' && element.tagName.toLowerCase() === 'section'
  })

  expect(signUpText).toBeInTheDocument()
  
  const emailInput = await screen.findByLabelText('Email:')
  const passwordInput = await screen.findByLabelText('Password:')
  const signupButton = await screen.findByText((content, element) => element.tagName.toLowerCase() === 'button' && content === 'Log In')
  
  fireEvent.change(emailInput, { target: { value: 'asdf' } })
  fireEvent.change(emailInput, { target: { value: '1234' } })
  fireEvent.click(signupButton)

  await waitFor(() => location.pathname === '/projects')
})

// This is for a specific bug that came up
it('should change log in text to sign up when navigating to /login from /signup', async () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <Routes/>
      <HistoryGrabber />
    </MemoryRouter>
  )
  const signUpText = await screen.findByText((content, element) => {
    return content === 'Sign Up' && element.tagName.toLowerCase() === 'section'
  })

  expect(signUpText).toBeInTheDocument()

  history.push('/login')

  const logInText = await screen.findByText((content, element) => {
    return content === 'Log In' && element.tagName.toLowerCase() === 'section'
  })

  expect(logInText).toBeInTheDocument()
})
