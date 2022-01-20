import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import EditClientForm from './EditClientForm'

it('renders the Home view accurately', () => {
  const { container } = render(
    <Router>
      <EditClientForm />
    </Router>
  )
  expect(container).toMatchSnapshot()
})
