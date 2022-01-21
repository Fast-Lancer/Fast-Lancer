import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectDetailView from './ProjectDetailView.jsx'
import { server } from '../../apiMocks/server.js'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})


it('should display a loading screen, then a project detail view', async () => {

  const { container } = render(
    <MemoryRouter initialEntries={['/projects/1']}>
      <ProjectDetailView />
    </MemoryRouter>
  )

  
  expect(screen.getByText(/loading/gi)).toBeInTheDocument()
  
  await screen.findByText(/bob1/gi)
  await screen.findByText(/33/gi)
  await screen.findByText(/something@something.com/gi)
  await screen.findByText(/project1/gi)
  await screen.findByText(/2022-01-20/gi)
  await screen.findByText(/2022-01-21/gi)
  await screen.findByText(/ok/gi)
  await screen.findByText(/test notes/gi)

  expect(container).toMatchSnapshot()
})
