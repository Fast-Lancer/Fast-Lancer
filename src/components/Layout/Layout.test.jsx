import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { UserProvider } from '../../context/UserContext.jsx'
import Layout from './Layout.jsx'

it('should match the snapshot', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter initialEntries={['/']}>
        <Layout/>
      </MemoryRouter>
    </UserProvider>
  )

  expect(container).toMatchSnapshot()
})
