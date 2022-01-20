import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectDetail from './ProjectDetail.jsx'

it('should display project detail with provided content', () => {
  const { container } = render(
    <MemoryRouter>
      <ProjectDetail project={{ hourly_rate: 33, URL: 'something', date_start: '2022-01-20', date_end: '2022-01-20', description: 'something', notes: 'something', clients: { name: 'person' }  }}/>
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
