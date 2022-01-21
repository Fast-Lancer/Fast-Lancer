import { screen, render } from '@testing-library/react'
import About from './About'

it('properly renders the About view', () => {
  render(<About />)

  screen.findByText(/About Fast Lancer/i)
})
