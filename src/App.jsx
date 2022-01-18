import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Routes from "./views/Routes/Routes.jsx";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
