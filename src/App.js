import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './views/Routes/Routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
