import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import AuthForm from './AuthForm.jsx'

it('should match the snapshot', () => {

  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path='/'>
        <AuthForm isSigningUp={true} />
      </Route>
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})


it('should call the handleSubimt prop with the entered username and password', async () => {
  let email
  let password
  const mockToggle = jest.fn(() => null)
  const mockSubmit = jest.fn((e, p) => {
    email = e
    password = p
    return null
  })

  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path='/'>
        <AuthForm isSigningUp={true} handleSubmit={mockSubmit} />
      </Route>
    </MemoryRouter>

  )

  const emailInput = await screen.findByLabelText('Email:')
  const passwordInput = await screen.findByLabelText('Password:')
  const button = await screen.findByRole('button')

  fireEvent.change(emailInput, { target: { value: '123' } })
  fireEvent.change(passwordInput, { target: { value: 'abc' } })
  fireEvent.click(button)

  expect(mockSubmit).toHaveBeenCalled()
  expect(email).toEqual('123')
  expect(password).toEqual('abc')
})
