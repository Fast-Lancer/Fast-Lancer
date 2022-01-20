import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ClientDetail from './ClientDetail.jsx'

it('should match the snapshot', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <ClientDetail client={{
        client_name: 'bob',
        email: 'bob@bob.com',
        phone: '123',
        business_name: 'bobs business',
        notes: 'yo bobs pretty cool',
        projects: [
          { id: 1, title: 'project1' },
          { id: 2, title: 'project2' }
        ]
      }} />
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
