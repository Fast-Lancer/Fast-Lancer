import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Routes from '../Routes/Routes.jsx'

jest.mock('../../users.js')

it('should sign up a user', async () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <Routes/>
    </MemoryRouter>
  )

  const usernameInput = await screen.findByText('User Name')
  const passwordInput = await screen.findByText('Password')
  const submitButton = await screen.findByText('Sign Up')

  
})