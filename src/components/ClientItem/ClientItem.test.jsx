import { render } from '@testing-library/react'
import ClientItem from './ClientItem.jsx'

it('should render the ClientItem with the client info', () => {
  const { container } = render(
    <ClientItem client={{
      name: 'Bob Bobbertson',
      email: 'asdf@asdf.com',
      phone: '(360)-222-2222',
      business_name: 'Bobs Bobby Pins'
    }}/>
  )
  
  expect(container).toMatchSnapshot()
})
