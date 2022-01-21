import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import TitleNav from './TitleNav'

it('renders the TitleNav component accurately', () => {
  const { container } = render(
    <Router>
      <TitleNav pageTitle='projects' pageHeader='Header' />
    </Router>
  )
  expect(container).toMatchSnapshot()
})
