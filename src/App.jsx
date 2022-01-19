import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import Layout from './components/Layout/Layout.jsx'
import Routes from './components/Routes/Routes.jsx'
import './App.css'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
