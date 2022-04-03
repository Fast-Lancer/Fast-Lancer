import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Routes from './Routes'

it('properly renders the Routes component', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})
