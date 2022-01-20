import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectItem from './ProjectItem.jsx'


it('should display a project item with provided content', () => {
  const { container } = render(
    <MemoryRouter>
      <ProjectItem project={{ title: 'something', clients: { name: 'person' }, hourly_rate: 33, hours_quoted: 55, price_quoted: 375 }}/>
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
