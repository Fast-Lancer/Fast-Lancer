import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import EditClientForm from './EditClientForm'

it('renders the Edit client form component accurately', () => {
  const { container } = render(
    <Router>
      <EditClientForm />
    </Router>
  )
  expect(container).toMatchSnapshot()
})
