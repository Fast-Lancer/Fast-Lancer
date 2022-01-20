import { render } from '@testing-library/react'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import NewEditForm from './NewEditForm'

it('renders the edit client form accurately', () => {
  const { container } = render(
    <MemoryRouter>
      <Router>
        <NewEditForm />
      </Router>
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

it('renders the new client form accurately', () => {
  const { container } = render(
    <MemoryRouter>
      <Router>
        <NewEditForm isNew/>
      </Router>
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

