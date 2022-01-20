import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NewClientForm from './NewClientForm'

it('renders the Home view accurately', () => {
  const { container } = render(
    <Router>
      <NewClientForm />
    </Router>
  )
  expect(container).toMatchSnapshot()
})
