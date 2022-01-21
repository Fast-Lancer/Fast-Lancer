import { render } from '@testing-library/react'
import { BrowserRouter as Router, } from 'react-router-dom'
import Button from './Button'

it('renders the button component accurately', () => {
  const { container } = render(
    <Router>
      <Button buttonText='test'/>
    </Router>
  )
  expect(container).toMatchSnapshot()
})
