import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectForm from './ProjectForm.jsx'


it('should display a form with empty field values', () => {
  const { container } = render(
    <MemoryRouter>
      <ProjectForm initialValues={{
        date_start: '', date_end: '', hourly_rate: '', hours_worked: '', URL: '', description: '', completed_at: '', price_quoted: '', hours_quoted: '', title: '', notes: '', client_id: '', user_id: ''
      }} clientsAvailable={[{ client_name: 'person1', id: '1' }, { client_name: 'person2', id: '2' }]} />
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})

it('should display a form with provided values', () => {
  const handleSubmit = jest.fn()

  const { container } = render(
    <MemoryRouter>
      <ProjectForm initialValues={{
        date_start: '2022-01-20', date_end: '2022-01-21', hourly_rate: '30', hours_worked: '50', URL: 'some@url.com', description: 'testing', completed_at: '2022-01-21', price_quoted: '4000', hours_quoted: '100', title: 'testing', notes: 'testing', client_id: '1', user_id: ''
      }} clientsAvailable={[{ client_name: 'person1', id: '1' }, { client_name: 'person2', id: '2' }]} handleProject={handleSubmit}/>
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
