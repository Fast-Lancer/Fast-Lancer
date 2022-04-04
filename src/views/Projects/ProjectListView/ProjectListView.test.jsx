import {  render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { server } from '../../../apiMocks/server.js'
import ProjectListView from './ProjectListView.jsx'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})


it('should display a loading screen, then a project list view', async () => {

  const { container } = render(
    <MemoryRouter>
      <ProjectListView />
    </MemoryRouter>
  )

  
  expect(screen.getByText(/loading/gi)).toBeInTheDocument()
  
  await screen.findByText(/project1/gi)
  await screen.findByText(/project2/gi)
  await screen.findByText(/project3/gi)

  expect(container).toMatchSnapshot()
})
