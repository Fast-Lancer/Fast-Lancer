import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext.jsx';
import Routes from './views/Routes/Routes.jsx';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
