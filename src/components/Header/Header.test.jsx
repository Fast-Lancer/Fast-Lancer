import { useEffect } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { UserProvider, useUser } from '../../context/UserContext.jsx'
import { server } from '../../apiMocks/server.js'
import Header from './Header'

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

it('renders the Header component accurately', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <UserProvider>
        <UserAdder>
          <Header />
        </UserAdder>
      </UserProvider>
    </MemoryRouter>

  )
  expect(container).toMatchSnapshot()
})
