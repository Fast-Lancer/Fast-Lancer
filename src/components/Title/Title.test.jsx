import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Title from './Title'

it('renders the Title component accurately', () => {
  const { container } = render(
    <Router>
      <Title/>
    </Router>
  )
  expect(container).toMatchSnapshot()
})
